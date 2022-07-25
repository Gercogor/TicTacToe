import React from 'react';
import './Square.scss'

const Square = ({id, onClick, value}) => {
    return (
            <button id={id} onClick={onClick} className='square'>
                {value}
            </button>
    );
};

export default Square;
