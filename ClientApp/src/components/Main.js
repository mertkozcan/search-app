import React, { Component } from 'react';

import '../css/Main.css';

export class Main extends Component {
    static displayName = Main.name;

  render () {
    return (
      <div className='main'>
        <h1>Hello, world!</h1>  
      </div>
    );
  }
}
