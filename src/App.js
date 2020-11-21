import React from 'react';
import {Router} from '@reach/router';
import Header from './components/Header';
import {GlobalStyle} from './styles/GlobalStyle';

import Block from './Block';
import Search from './Search';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Block path="/"/>
        <Search path="/search" />
      </Router>
    </>
  )
}

export default App;
