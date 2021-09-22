import React from 'react';

export default function Display() {
  return (
    <>
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
