import React from 'react';
import {Link} from 'react-router';
import routePath from './helper/routePath';

export default class Navigation extends React.Component {

  render(){
    return (
      <div>
        <nav>
          <ul>
            <li><Link to={routePath('/')} >Home</Link></li>
            <li><Link to={routePath('/about')} >About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }

}
