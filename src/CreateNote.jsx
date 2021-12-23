import React from "react";
import Textarea from "react-expanding-textarea";



function CreateNote() {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }


    return (
        <div className="note-header-container col-lg">
            <div className="add-note-container container-flex">
                <form className="note">
                    <input onChange={handleChange} value={note.title} name="createNote" placeholder="Title" />
                    <Textarea 
                    value={note.content}
                    onChange={handleChange}
                    name="textArea"
                    id="newTextArea"
                    placeholder="Insert note"
                    />
                    <button> + </button>
                </form>
                
            </div>
        </div>
    )
}

export default CreateNote;