import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('QRCodeComponent renders without missing', () => {
  const { queryByTestId } = render(<App />);
  const qrComponentElement = queryByTestId('qr-code'); 
  expect(qrComponentElement).toBeInTheDocument();
});
