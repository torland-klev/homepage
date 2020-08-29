import React from 'react';
import '../../styles/chesspieces.css';

class Queen extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wq.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/bq.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspiece">
        <img src={img} alt="Queen" width="45" height="45"/>
      </div>
    );
  }
}

export default Queen;
