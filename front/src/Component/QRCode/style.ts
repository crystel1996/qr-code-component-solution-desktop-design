import { css } from '@emotion/css';
import { COLOR } from '../../Helper';

const cardStyle = css`

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100vh;
`;

const cardContent = css`

    background: ${COLOR.white};
    width: 350px;
    height: auto;
    border-radius: 25px;
    padding: 15px;
    padding-bottom: 25px;
    @media (max-width: 375px) {
        
        width: 280px ;
        
    }
`;

const cardContentImage = css`
    & img {
        width: 350px;
        border-radius: 25px;
    }
    @media (max-width: 375px) {
        & img {
          width: 280px ;
        }
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
        font-size: 15px;
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