import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
         <header>
            <div className="col-sm-12 bg-success"></div>
         </header>
         <div>
            {this.props.children}
         </div>
         <footer>
            <div className="col-sm-12 bg-success"></div>
         </footer>
      </div>
   );
  }
}

