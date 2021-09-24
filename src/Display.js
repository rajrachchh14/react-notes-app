import React from 'react';

export default function Display(props) {
  return (
    <>
      <div id="notes">
        <div className="note">
          <div className="note-title">{props.input1}</div>
          <div className="note-text">{props.input2}</div>
          <div className="toolbar-container">
            <div className="toolbar">
              <i className="toolbar-delete">Delete</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
