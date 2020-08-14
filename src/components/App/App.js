import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
//import InfiniteScroll from 'react-infinite-scroll-component';
//import Nav from 'components/Nav';
//import List from 'components/List';
//import Grid from 'components/Grid';
//import Loader from 'components/Loader';
//import { layouts, themes } from 'store/app/utils';
import { colorsDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

class App extends Component {
  render() {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          {/* <List /> */}
        </Wrapper>
      </div>
    </ThemeProvider>
  );
 }
}

export default App;
