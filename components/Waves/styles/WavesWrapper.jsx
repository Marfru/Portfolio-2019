import styled, { keyframes } from 'styled-components';
import img from '../images/wave2.png';
import imgPhone from '../images/wave3.png';
import media from '../../common/styles/media';

const wavesKeyFrames = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1360px;
  }
`

export default styled.div`
    width: 100%;
    height: 500px;
    left: 0;
    bottom: 0;
    position: fixed;
    margin-top: 250px;
    background: url(${img});
    animation: animate 8s linear infinite;
    animation-name: ${wavesKeyFrames};
    ${media.phone`
      background: url(${imgPhone});
      height: 300px;
    `}
`