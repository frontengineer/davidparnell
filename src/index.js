import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import About from './About';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/davidparnell/" component={App} >
      <Route path="/davidparnell/about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
