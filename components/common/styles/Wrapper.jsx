import styled from 'styled-components';
import media from './media';


export default styled.div`
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5%;
    padding-left: 5%;
    height: auto;
    margin-top: 40px;
    ${media.phone`
        margin-left: 0;
        margin-right: 0;
    `}
`;