import React from 'react'

const GameBoard = ({board}) => {
  const data = {
    o: <td>੦</td>,
    x: <td>×</td>,
    " ": <td></td>
  }
  
  const Box = ({key, value}) => {
    console.log(key, value)
    return <td key={key} >{data[value]}</td>
  }
  // Transform the array into 3 rows with the data in each <td></td>

  // Wrap each row in <tr></tr>
  const boxes = board.map((box, idx) => <Box key={idx} value={box} /> )

  const rows = [boxes.slice(0, 3), boxes.slice(3, 6), boxes.slice(6)]
    .map(row => <tr>{row}</tr>)
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default GameBoard

