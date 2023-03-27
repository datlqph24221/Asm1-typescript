import { useState } from "react"
import Square from "./square"

const Board = () => {
    const [game, setGame] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState(true)
    // const [isAiPlaying, setIsAiPlaying] = useState(false);
    // const [lastMove, setLastMove] = useState(null);
    // const [winner, setWinner] = useState(null);
    // const [undoUsed, setUndoUsed] = useState(false);
    // const [xIsNext, setXIsNext] = useState(true);


    // const handleUndo = () => {
    //     if (undoUsed || !lastMove) {
    //         return;
    //     }

    //     const newGame = [...game];
    //     newGame[lastMove] = null;
    //     setGame(newGame);
    //     setUndoUsed(true);
    //     setXIsNext(!xIsNext);
    // };



    const handlePlay = (position) => {
        // console.log(position);
        // game[position] = "X"
        const newGame = game.map((g, index) => {
            if (position === index) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
    }

    // const handleClick = (i) => {
    //     if (game[i] || winner) {
    //         return;
    //     }

    //     const newGame = [...game];
    //     newGame[i] = xIsNext ? 'X' : 'O';
    //     setGame(newGame);
    //     setLastMove(i);
    //     setUndoUsed(false);
    //     setXIsNext(!xIsNext);
    // };

    //   const newBoard = [...board];
    //   newBoard[i] = xIsNext ? 'X' : 'O';
    //   setBoard(newBoard);
    //   setLastMove(i);
    //   setUndoUsed(false);
    //   setXIsNext(!xIsNext);
    // };

    // const handleReset = () => {
    //     setGame(Array(9).fill(null));
    //     setXIsNext(true);
    //     setWinner(null);
    //     setLastMove(null);
    //     setUndoUsed(false);
    //     setIsAiPlaying(false);
    //     setResetCounter(resetCounter + 1);
    // };


    const listWin = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    const checkWinner = () => {
        for (let i = 0; i < listWin.length; i++) {
            const [p1, p2, p3] = listWin[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
                break;
            } else if (listWin !== listWin[i] && game[p1] !== game[p2] && game[p2] !== game[p3] && game[p1] !== game[p3]) {
                return "Hòa";
            }
        }
    }

    // const Random = () => {
    //     setTimeout(() => {
    //         if (isAiPlaying) {
    //             const emptySquares = game.reduce((acc, cur, i) => {
    //                 if (!cur) {
    //                     acc.push(i);
    //                 }
    //                 return acc;
    //             }, []);

    //             const randomSquare =
    //                 emptySquares[Math.floor(Math.random() * emptySquares.length)];

    //             handleClick(randomSquare);
    //         }
    //     }, 0);

    //     return () => {
    //         setIsAiPlaying(false);
    //     };
    // }
    // Random(setIsAiPlaying)

    // const renderUndoButton = () => {
    //     if (!lastMove || undoUsed || winner) {
    //         return null;
    //     }
    //     return <button onClick={handleUndo}>Undo</button>;
    // };
    return <>
        <div>
            {/* <input type="button" value={undoUsed[0]} handleUndo={() => { handleUndo(game - 1) }} /> */}
            <h2>Winner is: {checkWinner()}</h2>


            <div className="grid grid-cols-3 gap-2">
                <Square value={game[0]} handlePlay={() => handlePlay(0)} />
                <Square value={game[1]} handlePlay={() => handlePlay(1)} />
                <Square value={game[2]} handlePlay={() => handlePlay(2)} />
                <Square value={game[3]} handlePlay={() => handlePlay(3)} />
                <Square value={game[4]} handlePlay={() => handlePlay(4)} />
                <Square value={game[5]} handlePlay={() => handlePlay(5)} />
                <Square value={game[6]} handlePlay={() => handlePlay(6)} />
                <Square value={game[7]} handlePlay={() => handlePlay(7)} />
                <Square value={game[8]} handlePlay={() => handlePlay(8)} />
            </div>

            <button onClick={setGame}>Reset</button>
        </div>
    </>
}

export default Board



