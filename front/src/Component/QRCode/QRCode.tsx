import React, { FC } from 'react';
import { QRCodeComponentInterface } from './interface';

export const QRCode: FC<QRCodeComponentInterface> = () => {

    return <div data-testid="qr-code">
        <div>
            <img alt="Schema-QR-Code" src="/assets/images/image-qr-code.png" />
        </div>
        <div>
            <h2>Improve your front-end skills by building projects</h2>
        </div>
        <div>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>

}
