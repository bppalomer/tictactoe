import React from 'react'
import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;

  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>Player X <br></br> {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>Player O <br></br> {oScore}</span>
    </div>
  )
}
