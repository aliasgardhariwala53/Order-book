import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBids, updateAsks } from '../redux/orderBookSlice';

export const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'book',
          symbol: 'tBTCUSD',
        })
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (Array.isArray(data) && data.length > 1) {
        const [, orders] = data;

        if (Array.isArray(orders[0])) {
          const bids = orders.filter(([price]:any) => price > 0).map(([price,count, amount]:any) => ({ price, amount ,count }));
          const asks = orders.filter(([price]:any) => price < 0).map(([price,count, amount]:any) => ({ price: -price, amount ,count }));

          dispatch(updateBids(bids));
          dispatch(updateAsks(asks));
        } else {
          const [price, count, amount] = orders;

          if (count > 0) {
            const entry = { price, amount: Math.abs(amount),count };
            if (amount > 0) {
              dispatch(updateBids([entry]));
            } else {
              dispatch(updateAsks([entry]));
            }
          }
        }
      }
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);
};
