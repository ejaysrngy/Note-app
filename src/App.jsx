import React from "react";
import Note from "./Note";
import notes from "./notes";

function Header() {
    return (
    <div> 
        <header>
            <h1> Notes </h1>
        </header>
    </div>
)};

function NoteBody() {
    return (
        <div className="note-body-container">
            <div className="add-note-container container-flex">
                <div className="note">
                    <h1> Insert Note here </h1>
                    <p> Insert Note here </p>
                </div>
            </div>
            <div className="note-container container-flex span12 col-lg col-md">
            {notes.map((props, index) => 
            <Note
                key={index}
                title={props.title}
                content={props.content}
                /> )}
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <footer>
                <p> Final Project: Udemy</p>
            </footer>
        </div>
    )
}



export {Header, NoteBody, Footer};