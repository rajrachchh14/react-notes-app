import React from 'react';

export default function Display(props) {
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

      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
