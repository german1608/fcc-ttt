import React from 'react'

const GameBoard = ({board}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>×</td>
          <td>○</td>
          <td>×</td>
        </tr>
        <tr>
          <td>×</td>
          <td>○</td>
          <td>×</td>
        </tr>
        <tr>
          <td>×</td>
          <td>○</td>
          <td>×</td>
        </tr>
      </tbody>
    </table>
  )
}

export default GameBoard

