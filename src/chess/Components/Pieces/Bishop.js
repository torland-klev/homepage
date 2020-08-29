import React from 'react';
import '../../styles/chesspieces.css';

class Bishop extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wb.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/bb.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspiece">
        <img src={img} alt="Bishop" width="45" height="45"/>
      </div>
    );
  }
}

export default Bishop;
