import { css } from '@emotion/css';
import { COLOR } from '../../Helper';

const cardStyle = css`

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

const cardContent = css`

    background: ${COLOR.white};
    width: 250px;
    border-radius: 25px;
    padding: 15px;
    margin-top: 180px;

`;

const cardContentImage = css`
    & img {
        width: 250px;
        border-radius: 25px;
    }

`;

const cardContentTitle = css`

    & h2 {
        color: ${COLOR.colorDarkBlue}
    }

`;

const cardContentParagraph = css `

    & p {
        color: ${COLOR.grayishBlue};
    }

`;

const style = {
    cardStyle,
    cardContentImage,
    cardContentTitle,
    cardContentParagraph,
    cardContent
}

export default style;