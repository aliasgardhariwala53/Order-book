import React from 'react';
import OrderBook from './components/OrderBook';
import Controls from './components/Controls';
import {useWebSocket} from './hooks/useWebSocket';

function App() {
  useWebSocket();
  return (
    <div className="app">
      <h1>Order Book</h1>
      <Controls />
      <OrderBook />
    </div>
  );
}

export default App;
