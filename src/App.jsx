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
    const [noteArray, setNoteArray] = React.useState([]);

    function addNote(note){
        setNoteArray(prevArray => {
            return [...prevArray, note]}
        )
    }

    return (
        <div>
            <CreateNote 
                onAdd={addNote}
            />
            <div className="note-container container-flex span12 col-lg col-md">
                {noteArray.map((props, index) => 
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