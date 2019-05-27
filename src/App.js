import React from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink to='/users/' exact>Users</NavLink></li>
                <li><NavLink to='/courses/' exact>Courses</NavLink></li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path='/users/' component={Users} />
            <Route path='/courses/' component={Courses} />
            <Redirect from='/all-courses/' to='/courses' />
            <Route render={() => <h1>Error, page not found!</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
