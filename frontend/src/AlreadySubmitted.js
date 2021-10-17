import React from 'react'
import TitleSVG from "./TitleSVG";

function AlreadySubmitted({logout}) {
    return (
        <div className="flex-75 flex justify-center items-center">
            <h2 className="text-3xl font-light text-gray-500 mb-2">You have already submitted!</h2>
        </div>
    )
}

export default AlreadySubmitted
