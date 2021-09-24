import React, { useState } from 'react';

export default function FormPart(props) {
  let [formInput, setformInput] = useState({
    input1: '',
    input2: '',
  });

  const [expand, setExpand] = useState(false);

  const OpenIt = () => {
    // console.log('cli');
    setExpand(true);
  };

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

  // Reverse Props Send
  let Submit = (e) => {
    e.preventDefault();
    props.passNote(formInput);

    // After Insert Clear Form
    setformInput({
      input1: '',
      input2: '',
    });
    setExpand(false);
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
          {expand ? (
            <input
              id="note-title"
              name="input1"
              value={formInput.input1}
              placeholder="Title"
              type="text"
              onChange={inputEvent}
            />
          ) : null}
          <input
            id="note-text"
            name="input2"
            value={formInput.input2}
            placeholder="Take a note..."
            type="text"
            onChange={inputEvent}
            onClick={OpenIt}
          />

          {expand ? (
            <div id="form-buttons">
              <button type="submit" id="submit-button" onClick={Submit}>
                Submit
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}
