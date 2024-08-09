// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import orderBookReducer from './orderBookSlice';

const store = configureStore({
  reducer: {
    orderBook: orderBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
