// src/redux/orderBookSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderBookEntry {
  price: number;
  amount: number;
  count: number;
}

interface OrderBookState {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
  precision: number;
  zoomLevel: number;
}

const initialState: OrderBookState = {
  bids: [],
  asks: [],
  precision: 2,
  zoomLevel: 20,
};

const orderBookSlice = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    updateBids(state, action: PayloadAction<OrderBookEntry[]>) {
      const newBids = action.payload;
      state.bids = [...newBids, ...state.bids].slice(0, state.zoomLevel);
    },
    updateAsks(state, action: PayloadAction<OrderBookEntry[]>) {
      const newAsks = action.payload;
      state.asks = [...newAsks, ...state.asks].slice(0, state.zoomLevel);
    },
    setPrecision(state, action: PayloadAction<number>) {
      state.precision = action.payload;
    },
    zoomIn(state) {
      state.zoomLevel = Math.min(state.zoomLevel + 10, 100); 
    },
    zoomOut(state) {
      state.zoomLevel = Math.max(state.zoomLevel - 10, 10);
    },
  },
});

export const { updateBids, updateAsks, setPrecision, zoomIn, zoomOut } = orderBookSlice.actions;
export default orderBookSlice.reducer;
