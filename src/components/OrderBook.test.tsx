// src/components/OrderBook.test.tsx
import { render, screen } from '@testing-library/react';
import OrderBook from './OrderBook';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('renders OrderBook component', () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );

  const bidsElement = screen.getByText(/bids/i);
  expect(bidsElement).toBeInTheDocument();

  const asksElement = screen.getByText(/asks/i);
  expect(asksElement).toBeInTheDocument();
});
