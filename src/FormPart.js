import React, { useState } from 'react';

export default function FormPart() {
  let [formInput, setformInput] = useState({
    input1: '',
    input2: '',
  });

  let inputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // let { name, value } = e.target;

    setformInput((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });

    // ('ss');
  };

  let Submit = (e) => {
    console.log('Submit');
  };

  return (
    <>
      {/* hidden */}
      {/* <div className="modal">
        <div className="modal-content">
          <input className="modal-title" placeholder="Title" type="text" />
          <input className="modal-text" placeholder="Take a note..." type="text" />
          <span className="modal-close-button">Close</span>
        </div>
      </div> */}

      <div id="form-container">
        <form id="form" autoComplete="off">
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
            value={formInput.input2}
            placeholder="Take a note..."
            type="text"
            onChange={inputEvent}
          />
          <div id="form-buttons">
            <button type="submit" id="submit-button" onClick={Submit}>
              Submit
            </button>
            <button type="button" id="form-close-button">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
