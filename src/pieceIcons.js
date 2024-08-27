import React from 'react';

export const getPieceIcon = (row, col) => {
  const pieces = {
    rook: '♜',
    knight: '♞',
    bishop: '♝',
    queen: '♛',
    king: '♚',
    pawn: '♟',
  };

  const piecePositions = {
    0: [pieces.rook, pieces.knight, pieces.bishop, pieces.queen, pieces.king, pieces.bishop, pieces.knight, pieces.rook],
    1: Array(8).fill(pieces.pawn),
    6: Array(8).fill(pieces.pawn),
    7: [pieces.rook, pieces.knight, pieces.bishop, pieces.queen, pieces.king, pieces.bishop, pieces.knight, pieces.rook],
  };

  const isWhitePiece = row <= 1;
  const piece = piecePositions[row] ? piecePositions[row][col] : '';

  return (
    <span className={isWhitePiece ? 'white-piece' : 'black-piece'}>
      {piece}
    </span>
  );
};
