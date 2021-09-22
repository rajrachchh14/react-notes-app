import React from 'react';

export default function BodyPart() {
  return (
    <>
      {/* hidden */}
      <div class="modal">
        <div class="modal-content">
          <input class="modal-title" placeholder="Title" type="text" />
          <input class="modal-text" placeholder="Take a note..." type="text" />
          <span class="modal-close-button">Close</span>
        </div>
      </div>
      {/* hidden */}
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
        <div id="placeholder">
          <img
            id="placeholder-logo"
            src="https://icon.now.sh/lightbulb_outline"
          />
        </div>

        <div id="color-tooltip">
          <div class="color-option" data-color="#fff" id="white"></div>
          <div class="color-option" data-color="#d7aefb" id="purple"></div>
          <div class="color-option" data-color="#fbbc04" id="orange"></div>
          <div class="color-option" data-color="#a7ffeb" id="teal"></div>
        </div>
      </main>
    </>
  );
}
