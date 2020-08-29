import React from 'react';
import '../../styles/chesspieces.css';

class Knight extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wkn.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/bkn.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspiece">
        <img src={img} alt="Knight" width="45" height="45"/>
      </div>
    );
  }
}

export default Knight;
