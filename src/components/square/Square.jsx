import React from 'react';
import './Square.scss'

const Square = (props) => {
    return (
            <button id={props.id} onClick={props.onClick} className='square'>
                {props.value}
            </button>
    );
};

export default Square;
