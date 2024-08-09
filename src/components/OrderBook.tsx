import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './OrderBook.scss';

const OrderBook: React.FC = () => {
  const bids = useSelector((state: RootState) => state.orderBook.bids);
  const asks = useSelector((state: RootState) => state.orderBook.asks);

  return (
    <div className="order-book">
      <div style={{width:'50%'}}>
      <ul className="bids">
          <li className="bid">
            <span className="amount">{'Count'}</span>
            <span className="amount">{'Amount'}</span>
            <span className="price">{'Price'}</span>
          </li>
      
      </ul>
      <ul className="bids">
        {bids.map(({ price, amount ,count }, index) => (
          <li key={index} className="bid">
            <span className="Amount">{count.toFixed(2)}</span>
            <span className="Amount">{amount.toFixed(2)}</span>
            <span className="price">{price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      </div>
      <div style={{width:'45%'}}>
      <ul className="bids">
       <li className="bid">
            <span className="amount">{'Count'}</span>
            <span className="amount">{'Amount'}</span>
            <span className="price">{'Price'}</span>
          </li>
      
      </ul>
      <ul className="asks">
        {asks.map(({ price, amount ,count }, index) => (
          <li key={index} className="ask">
             <span className="Amount">{count.toFixed(2)}</span>
            <span className="Amount">{amount.toFixed(2)}</span>
            <span className="price">{price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default OrderBook;
