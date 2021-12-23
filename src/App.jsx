import React from "react";
import Note from "./Note";
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

    function deleteNote(event){
        console.log(event.target.id)
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
                    id={index}
                    title={props.title}
                    content={props.content}
                    deleteItem={deleteNote}
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