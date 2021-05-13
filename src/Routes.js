import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalReset from './Styles/reset';
import { useGlobalContext } from './Context';
import theme from './Styles/theme';
import List from './Pages/List/List';
import Bookmark from './Pages/List/Bookmark';
import Loader from './Shared/Loader';

function Routes() {
  const { isLoading } = useGlobalContext();

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalReset />
        { isLoading && <Loader />}
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route path="/detail" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Routes;