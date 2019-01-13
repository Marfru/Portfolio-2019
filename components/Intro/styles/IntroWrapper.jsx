import styled from 'styled-components';
import media from '../../common/styles/media';

export default styled.div`
    width: 100%;
    height: auto;
    z-index: 3;
    position: relative;
    font-size: 70px;
    margin-top: 140px;
    ${media.tablet`
        margin-top: 70px;
        font-size: 40px;
    `}
    ${media.phone`
        margin-top: 25px;
        font-size: 40px;
        line-height: 68px;
    `}
`