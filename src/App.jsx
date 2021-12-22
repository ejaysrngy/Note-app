import React from "react";
import Note from "./Note";
import notes from "./notes";

function Header() {
    return (
    <div> 
        <header>
            <h1> Keeper </h1>
        </header>
    </div>
)};

function NoteBody(props) {
    return (
        <div className="note-container container-flex span12 col-lg col-md">
          {notes.map((props) => 
          <Note
            key={props.key}
            title={props.title}
            content={props.content}
            /> )}
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