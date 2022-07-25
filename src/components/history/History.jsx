import React from 'react';

const historyStyle = {
    width: '250px',
    textAlign: 'center',
    cursor: 'pointer',
    listStyleType: 'none',
    paddingLeft: '0px'
}
const historyStyleWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px'
}


const History = ({ history, onClick }) => {
    return (
        <div style={historyStyleWrapper}>
            <p>History of moves</p>
            <ul style={historyStyle}>
                {history.map((step, i) =>
                    <li id={i} key={i} onClick={() => onClick(i)}>
                        {
                            i===0
                            ? `To start  =>`
                            : `${i}. To step ${i}  =>`
                        }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default History;
