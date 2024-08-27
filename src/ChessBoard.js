import React from 'react';
import './ChessBoard.css';
import { getPieceIcon } from './pieceIcons';

const ChessBoard = () => {
  const rows = 8;
  const cols = 8;
  const board = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const isWhiteSquare = (i + j) % 2 === 0;
      const piece = getPieceIcon(i, j);
      board.push(
        <div key={`${i}-${j}`} className={`square ${isWhiteSquare ? 'white' : 'black'}`}>
          {piece}
        </div>
      );
    }
  }

  return <div className="chess-board">{board}</div>;
};

export default ChessBoard;
