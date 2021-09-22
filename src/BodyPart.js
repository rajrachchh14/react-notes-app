import React, { useState } from 'react';

export default function BodyPart() {
  let [formInput, setformInput] = useState({
    input1: '',
    input2: '',
  });

  let inputEvent = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;

    let { name, value } = e.target;

    setformInput((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });

    // ('ss');
  };
  return (
    <>
      {/* hidden */}
      {/* <div class="modal">
        <div class="modal-content">
          <input class="modal-title" placeholder="Title" type="text" />
          <input class="modal-text" placeholder="Take a note..." type="text" />
          <span class="modal-close-button">Close</span>
        </div>
      </div> */}

      <div id="form-container">
        <form id="form" autocomplete="off">
          <input
            id="note-title"
            name="input1"
            value={formInput.input1}
            placeholder="Title"
            type="text"
            onChange={inputEvent}
          />
          <input
            id="note-text"
            name="input2"
            value={formInput.input1}
            placeholder="Take a note..."
            type="text"
            onChange={inputEvent}
          />
          <div id="form-buttons">
            <button type="submit" id="submit-button">
              Submit
            </button>
            <button type="button" id="form-close-button">
              Close
            </button>
          </div>
        </form>
      </div>
      <div id="notes">
        <div class="note">
          <div class="note-title">a</div>
          <div class="note-text">b</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <i class="toolbar-delete">Delete</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
