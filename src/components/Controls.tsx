// src/components/Controls.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setPrecision, zoomIn, zoomOut } from '../redux/orderBookSlice';
import './Controls.scss';

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const precision = useSelector((state: RootState) => state.orderBook.precision);
  const zoomLevel = useSelector((state: RootState) => state.orderBook.zoomLevel);

  const handleZoomIn = () => dispatch(zoomIn());
  const handleZoomOut = () => dispatch(zoomOut());
  const handleIncreasePrecision = () => dispatch(setPrecision(precision + 1));
  const handleDecreasePrecision = () => dispatch(setPrecision(Math.max(0, precision - 1)));

  return (
    <div className="controls">
      <button onClick={handleIncreasePrecision}>Increase Precision</button>
      <button onClick={handleDecreasePrecision}>Decrease Precision</button>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <div>Precision: {precision}</div>
      <div>Zoom Level: {zoomLevel}</div>
    </div>
  );
};

export default Controls;
