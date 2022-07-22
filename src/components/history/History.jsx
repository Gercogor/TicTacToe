import React from 'react';

const histStyle = {
    width: '250px',
    textAlign: 'center',
    cursor: 'pointer',
    listStyleType: 'none',
    paddingLeft: '0px'
}
const histStyleWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px'
}


const History = ({ history, onClick }) => {
    return (
        <div style={histStyleWrapper}>
            <p>History of moves</p>
            <ul style={histStyle}>
                {history.map((step, i) =>
                    <li id={i} key={i} onClick={() => onClick(i)}>
                        {i + 1}. to {i > 0 ? `step ${i}` : `start`}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default History;
