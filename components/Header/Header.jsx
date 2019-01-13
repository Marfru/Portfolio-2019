import React, { Component } from 'react';
import HeaderWrapper from './styles/HeaderWrapper';
import Logo from './styles/Logo';
import logo from '../../logo.png';
import MenuItems from '../MenuItems/MenuItems';

export class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
               <Logo>
                     <img src={logo} alt='logo' href='#' />
               </Logo>
            </HeaderWrapper>
        )}
}

export default Header;