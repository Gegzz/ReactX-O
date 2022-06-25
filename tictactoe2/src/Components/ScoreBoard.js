import React from "react";

import "./ScoreBoard.css";

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <div className={`score x-score ${!xPlaying && "inactive"}`}>
        <div>X</div>
        <div className="dash" />
        <div>{xScore}</div>
      </div>
      <div className={`score o-score ${xPlaying && "inactive"}`}>
        <div>O</div>
        <div className="dash" />
        <div>{oScore}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
