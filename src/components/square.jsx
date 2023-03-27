// import { useState } from "react"
// import Board from "./board"

const Square = ({ value, handlePlay, handleUndo, lastMove, undoUsed, winner }) => {

    const squareHandlePlay = () => {
        if (!value) {
            handlePlay()
        }
    }
    // const renderUndoButton = () => {
    //     if (!lastMove || undoUsed || winner) {
    //         handleUndo();
    //     }
    //     return <>
    //         <button onClick={renderUndoButton}>Undo</button>
    //     </>
    // };

    return <>
        <button
            onClick={squareHandlePlay}
            className="w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white">
            {value}
        </button>

    </>
}

export default Square