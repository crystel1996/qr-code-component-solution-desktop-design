import { render } from '@testing-library/react';
import React from 'react';
import { QRCode } from './QRCode';

test('QR Code Title is not missing', () => {

    const { getByText } = render(<QRCode />);

    const titleElement = getByText('Improve your front-end skills by building projects');

    expect(titleElement).toBeInTheDocument();

});

test('Alternative attribute is not missing', () => {

    const { getByAltText } = render(<QRCode />);

    const titleElement = getByAltText('Schema-QR-Code');

    expect(titleElement).toBeInTheDocument();

});

test('Paragraph is not missing', () => {
    const { getByText } = render(<QRCode />);

    const paragraphElement = getByText('Scan the QR code to visit Frontend Mentor and take your coding skills to the next level')

});