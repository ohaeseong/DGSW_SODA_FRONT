import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';

function App() {
  return (
    <>
      <Switch>
        <Route
          path='/bamboo'
          render={() => <Pages.Bamboo/>}
        />

        <Route
          path='/'
          render={() => <Pages.Home/>}
        />
      </Switch>
    </>
  );
}

export default App;
