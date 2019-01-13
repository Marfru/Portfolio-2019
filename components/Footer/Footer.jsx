import React, { Component } from 'react';
import FooterWrapper from './styles/FooterWrapper';
import { SocialIcon } from 'react-social-icons';

export class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className='SocialWrapper'>
                    <SocialIcon url='https://www.linkedin.com/in/marcos-frutos-3a023385/' target="_blank" bgColor='transparent' fgColor='#fff'/>
                    <SocialIcon url='https://github.com/Marfru' target="_blank" bgColor='transparent' fgColor='#fff'/>
                    <SocialIcon url='mailto:hola@marfru.com' target="_blank" bgColor='transparent' fgColor='#fff'/>
                </div>
            </FooterWrapper>
        )}
}

export default Footer;