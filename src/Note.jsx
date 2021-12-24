import React from "react";


function Note(props) {
    return (
            <div className="note">
                <h1> {props.title} </h1>
                <p> {props.content} </p>
                <div className="icons">
                    <i className="fi fi-rr-edit"></i>
                    <button onClick={() =>  props.onDelete(props.id)}> 
                        <i
                        type="submit"
                        className="fi fi-rr-trash"></i>
                    </button>
                </div>
            </div>
            
    )
}

export default Note;