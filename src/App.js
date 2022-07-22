import './App.css';
import Board from "./components/board/Board";
import React, { useState } from 'react';
import { calcWinner } from "./components/winnerFunc/calcWinner";
import History from "./components/history/History";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameStatus from './components/gameStatus/GameStatus';

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([board]);
    const [gameStep, setStep] = useState(0)
    let winner = calcWinner(board);

    let squares = document.querySelectorAll('.square');
    if (winner) colorWin(winner)

    function colorWin(winner) {
        squares.forEach((el, i) => {
            if (winner[1].includes(i)) el.classList.add('winSquare')
        })
    }

    function unColorWin() {
        squares.forEach((el) => {
            el.classList.remove('winSquare')
        })
    }

    function handleClick(i) {
        setStep(gameStep+1)
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setBoard(boardCopy);
        setHistory([...(history.slice(0, gameStep+1)), boardCopy]);
    }

    function historyClick(i) {
        setBoard(history[i]);
        setStep(i)
        setXIsNext(i%2===0)
        unColorWin();
    }

    let reset = () => {
        setXIsNext(true);
        setBoard(board.fill(null));
        setHistory([board]);
        unColorWin();
    }

    return (
        <div className="App">
            <GameStatus winner={winner} xIsNext={xIsNext} />
            <Board squares={board} onClick={handleClick} />
            <button variant="link" onClick={reset}>
                Reset
            </button> 
            <History history={history} onClick={historyClick} />
        </div>
    );
}

export default App;
