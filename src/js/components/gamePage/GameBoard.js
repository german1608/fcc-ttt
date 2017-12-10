import React from 'react'

/**
 * Componente que mostrara el estado del juego
 * Es interactivo, permite al usuario modificar
 * el state de GamePage.js
 */
const GameBoard = ({board, onClick}) => {
  const data = {
    // Buscar este circulito fue un problema
    o: '੦',
    x: '×',
    ' ': ' '
  }
  // Change each value for a <td></td>
  const boxes = board.map(
    (box, idx) => <td key={idx} onClick={onClick(idx)}>{data[box]}</td>)

  // Group them in 3 arrays of 3 items and wrap each one in <tr></tr>
  const rows = [boxes.slice(0, 3), boxes.slice(3, 6), boxes.slice(6)]
    .map((row, idx) => <tr key={idx} >{row}</tr>)
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default GameBoard
