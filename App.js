import React, { Component } from 'react';
import Wrapper from './components/common/styles/Wrapper';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Waves } from './components/Waves/Waves';
import { Knowledge } from './components/Knowledge/Knowledge';
import { Footer } from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Intro />
        <Waves />
        {/* <Knowledge /> */}
        <Footer />
      </Wrapper>
    )}
}

export default App;
