import React from 'react';

export default function Display() {
  return (
    <>
      <div id="notes">
        <div className="note">
          <div className="note-title">a</div>
          <div className="note-text">b</div>
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
