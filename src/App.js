import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./views'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Home} />;
      </Switch>
    </Suspense>
  );
}

export default App;
