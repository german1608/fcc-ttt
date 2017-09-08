import React from 'react'

const MainPage = (props) => {
  return (
    <div className='hero is-fullheight'>
      <div className="hero-body main-page">
        <h1 className='has-text-centered'>Tic Tac Toe</h1>

        <div className='menu'>
          <button>ONE PLAYER</button>
          <button>TWO PLAYERS</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
