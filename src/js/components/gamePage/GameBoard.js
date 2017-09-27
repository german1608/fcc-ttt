import React from 'react'

const GameBoard = ({board}) => {
  const ex = '×'
  const circle = '੦'
  return (
    <table>
      <tbody>
        <tr>
          <td>×</td>
          <td>੦</td>
          <td>×</td>
        </tr>
        <tr>
          <td>×</td>
          <td>੦</td>
          <td>×</td>
        </tr>
        <tr>
          <td>×</td>
          <td>੦</td>
          <td>×</td>
        </tr>
      </tbody>
    </table>
  )
}

export default GameBoard

