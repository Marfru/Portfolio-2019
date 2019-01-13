import React, { Component } from 'react';
import IntroWrapper from './styles/IntroWrapper';
import Typed from 'react-typed';

export class Intro extends Component {
    render() {
        return (
            <IntroWrapper>
               <Typed
                strings={[
                    '<strong>Hi!</strong>',
                    'My name is <strong>Marcos.</strong>',
                    'And I am a <strong>Front-End</strong> Developer.',
                    'I am currently updating my <strong><u>portfolio</u>.</strong>'
                ]}
                typeSpeed={80}
                backSpeed={50}
                loopCount={Infinity}
            />
            </IntroWrapper>
        )}
}

export default Intro;