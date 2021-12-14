import React from "react";
import ReactDOM from "react-dom";
import {Header, Footer} from "./App";
import Note from "./Note";
import notes from "./notes";

// function createNote{
//   return (
//     <Note
//       key={props.key}
//       title={props.title}
//       content={props.content}
//       />
//   )
// };

ReactDOM.render(
  <div>
      <Header />
      <div className="note-container container-flex span12 col-lg col-md">
          {notes.map((props) => 
          <Note
            key={props.key}
            title={props.title}
            content={props.content}
            /> )}
      </div>
      <Footer />
  </div>
  , document.getElementById("root")
);

