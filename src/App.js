/** @format */

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/HomeConatiner';
import Layout from './layout/Layout';
import GlobalStyle from './style/GlobalStyle';
const Favorites = React.lazy(() => import('./containers/FavoritesConatiner'));

const App = () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router basename={'/'}>
        <Layout>
          <GlobalStyle />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' component={Favorites} />
          </Switch>
        </Layout>
      </Router>
    </React.Suspense>
  );
};

export default App;
