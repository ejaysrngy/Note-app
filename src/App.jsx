import React from "react";
import Note from "./Note";
import notes from "./notes";
import CreateNote from "./CreateNote";


function Header() {
    return (
        <header>
            <h1> Notes </h1>
        </header>
)};

function NoteBody() {
    const [addTitle, setAddTitle] = React.useState("Title");
    const [addNote, setAddNote] = React.useState("Notes here");


    return (
        <div>
            <CreateNote />
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