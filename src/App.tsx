import NavigationBar from './components/NavigationBar';
import React from 'react';
import Stats from './pages/Stats';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  const pages = ['Home', 'Stats', 'Watchlist', 'Games'];

  return (
    <Router>
      <div className='h-screen bg-gray-100'>
        <NavigationBar pages={ pages } />
        <main className='h-screen'>
          <Switch>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/stats'>
              <Stats />
            </Route>

            <Route path='/404'>
              <PageNotFound />
            </Route>

            <Redirect to='/404'/>

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

