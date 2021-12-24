import React from "react";
import Textarea from "react-expanding-textarea";




function CreateNote(props) {
    // const [note, setNote] = React.useState({
    //     title: "",
    //     content: ""
    // });

    const [newTitle, setTitle] = React.useState("");
    const [newContent, setContent] = React.useState("");

        //
    // function handleChange(event){
    //     const {name, value} = event.target;
    //     setNote(prevNote => {
    //         return {
    //         ...prevNote,
    //         [name]: value
    //     }}
    //     )
    // }
        //
        
    function handleChangeTitle(event){ 
        setTitle(event.target.value)
    }

    function handleChangeContent(event){ 
        setContent(event.target.value)
    }

    function submitNewNote(event){
        let note = {
            title: newTitle,
            content: newContent
        }
        props.onAdd(note)
        event.preventDefault();
    }

    return (
        <div className="note-header-container col-lg">
            <div className="add-note-container container-flex">
                <form className="note" autoComplete="off">
                    <input onChange={handleChangeTitle} value={newTitle} name="createNote" placeholder="Title" />
                    <Textarea 
                    value={newContent}
                    onChange={handleChangeContent}
                    name="textArea"
                    id="newTextArea"
                    placeholder="Insert note"
                    rows="3"
                    />
                    <button onClick={submitNewNote}> + </button>
                </form>
                
            </div>
        </div>
    )
}

export default CreateNote;