import React from 'react';
import '../../styles/chesspieces.css';

class Pawn extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wp.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/bp.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspiecePawn">
        <img src={img} alt="Pawn" width="35" height="40"/>
      </div>
    );
  }
}

export default Pawn;
