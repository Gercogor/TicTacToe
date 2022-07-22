import React from 'react';
import Square from "../square/Square";

import './Board.scss';

const Board = ({squares, onClick}) => {
    return (
        <div className='board'>
            {squares.map((square,i)=>
                <Square id={i} key={i} value={square} onClick={()=>onClick(i)}/>
            )}
        </div>
    );
};

export default Board;
