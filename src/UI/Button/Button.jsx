import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({children, onClick, BgColor='white', TextColor='black'}) => {
    return (
        <div
            className='Button'
            style={{backgroundColor: BgColor, color: TextColor}}
            onClick={onClick}
        >
            <span>
                {children}
            </span>
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    BgColor: PropTypes.string,
    TextColor: PropTypes.string,
}

export default Button;
