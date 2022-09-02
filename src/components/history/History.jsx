import React from 'react';
import './History.scss'
import Button from '../../UI/Button/Button';

const History = ({ history, onClick }) => {
    return (
        <div className='historyStyleWrapper'>
            <p>Back to steps</p>
            <ul className='historyStyle'>
                {history.map((step, i) =>
                    <li className='historyStep' id={i} key={i} onClick={() => onClick(i)}>
                        {
                            i===0
                            ? <Button>Back to start</Button>
                            : <Button>Back to step {i}</Button>
                        }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default History;
