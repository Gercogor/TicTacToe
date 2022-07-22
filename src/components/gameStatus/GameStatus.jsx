import React from 'react'

export default function GameStatus({ winner, xIsNext }) {
    return (
        <div className='game-status'>
            {
                winner === 'pat'
                    ? <p>Pat</p>
                    : <>
                        <p style={!winner ? { display: 'none' } : { display: 'block' }}>{winner ? xIsNext ? 'Winner: O' : 'Winner: X' : ' '}</p>
                        <p style={winner && { display: 'none' }}>{xIsNext ? 'next step "X"' : 'next step "O"'}</p>

                    </>
            }
        </div>
    )
}
