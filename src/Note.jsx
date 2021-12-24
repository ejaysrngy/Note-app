import React from "react";
import {motion, AnimatePresence} from "framer-motion";

function Note(props) {
    return (
        <AnimatePresence>
            <motion.div>
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
            </motion.div>
        </AnimatePresence>
    )
}

export default Note;