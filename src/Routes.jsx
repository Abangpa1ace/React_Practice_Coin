import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import { useGlobalContext } from './Context';
import theme from './Styles/theme';
import Loader from './Shared/Loader';
import CoinList from './Pages/List/CoinList';
import BookList from './Pages/List/BookList';
import Detail from './Pages/Detail/Detail';

function Routes() {
  const { isLoading } = useGlobalContext();

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        { isLoading && <Loader />}
        <Switch>
          <Route exact path="/" component={CoinList} />
          <Route exact path="/bookmark" component={BookList} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;