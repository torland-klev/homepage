import React from 'react';
import '../../styles/chesspieces.css';

class Rook extends React.Component {
  render(){
    const whitePiece = process.env.PUBLIC_URL + "/img/pieces/wr.png";
    const blackPiece = process.env.PUBLIC_URL + "/img/pieces/br.png";
    const img = (this.props.owner === "white") ? whitePiece : blackPiece;

    return (
      <div className="chesspieceRook">
        <img src={img} alt="Rook" width="40" height="45"/>
      </div>
    );
  }
}

export default Rook;
