import React from "react";
import Textarea from "react-expanding-textarea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/material/node/internal/svg-icons/Add';
import Zoom from "@mui/material/Zoom";


function CreateNote(props) {

    const [newTitle, setTitle] = React.useState("");
    const [newContent, setContent] = React.useState("");
    const [isExpanded, setExpanded] = React.useState(false);

        
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

    function expand() {
        setExpanded(true);
      }


    return (
        <div className="note-header-container col-lg">
            <div className="add-note-container container-flex">
                <form className="note" autoComplete="off">
                    {isExpanded && (
                        <input onChange={handleChangeTitle} value={newTitle} name="createNote" placeholder="Title" />
                    )}
                    
                    <Textarea 
                    value={newContent}
                    onClick={expand}
                    onChange={handleChangeContent}
                    name="textArea"
                    id="newTextArea"
                    placeholder="Insert note"
                    rows={isExpanded ? 3: 1}
                    />
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNewNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </form>
                
            </div>
        </div>
    )
}




export default CreateNote;