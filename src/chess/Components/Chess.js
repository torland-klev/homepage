import React from 'react';
import Board from './Board';
import config from '../config/config';

class Chess extends React.Component {

  render(){
    return (
      <div className="Wrapper">
        <Board initialSetup={config.initialSetup}/>
      </div>
    );
  }
}

export default Chess;
