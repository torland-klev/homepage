import React from 'react';
import '../../styles/chesspieces.css';

class King extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wk.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/bk.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspiece">
        <img src={img} alt="King" width="45" height="45"/>
      </div>
    );
  }
}

export default King;
