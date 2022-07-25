export function calcWinner(boardSquare) {
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    for (let i = 0; i < win.length; i++) {
        let [a,b,c] = win[i];
        if(boardSquare[a]&&boardSquare[a]===boardSquare[b]&&boardSquare[a]===boardSquare[c]){
            return [boardSquare[a],win[i]];
        }
    }
    if (boardSquare.every(elem => elem !== null)) return 'draw'
    return null;
}