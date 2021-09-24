import React from 'react';

export default function Display(props) {
  // console.log(props);
  const deleteNote = () => {
    // Reverse Props Send
    props.deleteNote(props.id);
  };
  return (
    <>
      {/* <div id="notes">
        <div className="note">
          <div className="note-title">{props.input1}</div>
          <div className="note-text">{props.input2}</div>
          <div className="toolbar-container">
            <div className="toolbar">
              <i className="toolbar-delete">Delete</i>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.input1}</h5>
            <p className="card-text">{props.input2}</p>
            <button className="btn btn-danger" onClick={deleteNote}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
