import React from 'react';

export default function BodyPart() {
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

      <main>
        <div id="form-container">
          <form id="form" autocomplete="off">
            <input id="note-title" placeholder="Title" type="text" />
            <input id="note-text" placeholder="Take a note..." type="text" />
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
        <div id="notes"></div>
      </main>
    </>
  );
}
