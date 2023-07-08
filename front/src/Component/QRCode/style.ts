import { css } from '@emotion/css';
import { COLOR } from '../../Helper';

const cardStyle = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${COLOR.white};
    width: 250px;
    border-radius: 25px;
    padding: 25px;
`;

const style = {
    cardStyle
}

export default style;