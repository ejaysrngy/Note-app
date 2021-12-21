import React from "react";


function Note(props) {
    return (
        <div className="note">
            <h1> {props.title} </h1>
            <p> {props.content} </p>
            <div className="icons">
                <i className="fi fi-rr-edit"></i>
                <i className="fi fi-rr-trash"></i>
            </div>
        </div>
    )
}

export default Note;