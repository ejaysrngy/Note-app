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

    function deleteNote(id){
        setNoteArray(
            noteArray.filter((item, index) => {
                return index !== id;
            }
        ))
    }

    return (
        <div>
            <CreateNote 
                onAdd={addNote}
            />
            <div className="note-container container-flex span12 col-lg col-md">
                {noteArray.map((props, index) => {
                    return   <Note
                    key={index}
                    id={index}
                    title={props.title}
                    content={props.content}
                    onDelete={deleteNote}
                    /> })}
            </div>
        </div>
    )
}




export {Header, NoteBody};