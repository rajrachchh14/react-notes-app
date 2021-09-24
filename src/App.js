import React, { useState } from 'react';
import Header from './Header';
import FormPart from './FormPart';
import Display from './Display';

export default function App() {
  const [addData, setData] = useState([]);

  // Reverse Props Receive
  const NotesSubmit = (formInput) => {
    // console.log('me', formInput);
    setData((preData) => {
      return [...preData, formInput];
    });
  };

  const NotesDelete = (id) => {
    // Reverse Props Receive
    // setData((preDatas) => {
    console.log(id);
    // preDatas.filter((cdata, index) => {
    //   return index !== id;
    // });
    // });
  };

  return (
    <>
      <Header />
      <FormPart passNote={NotesSubmit} />
      <div className="container">
        <div className="row">
          {addData.map((data, index) => {
            return (
              <Display
                key={index}
                id={index}
                {...data}
                deleteNote={NotesDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
