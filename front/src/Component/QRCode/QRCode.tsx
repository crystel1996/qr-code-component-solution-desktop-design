import React, { FC } from 'react';
import { QRCodeComponentInterface } from './interface';
import style from './style';

export const QRCode: FC<QRCodeComponentInterface> = () => {

    return <div data-testid="qr-code" className={style.cardStyle}>
        <div className={style.cardContent}>
            <div className={style.cardContentImage}>
                <img alt="Schema-QR-Code" src="/assets/images/image-qr-code.png" />
            </div>
            <div className={style.cardContentTitle}>
                <h2>Improve your front-end skills by building projects</h2>
            </div>
            <div className={style.cardContentParagraph}>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>

}
