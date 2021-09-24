import React, { useState } from 'react';
import Header from './Header';
import FormPart from './FormPart';
import Display from './Display';
import Container from './Container';

export default function App() {
  const [addData, setData] = useState([]);

  // Reverse Props Receive
  let NotesSubmit = (formInput) => {
    // console.log('me', formInput);
    setData((preData) => {
      return [...preData, formInput];
    });
  };

  return (
    <>
      <Header />
      <FormPart passNote={NotesSubmit} />
      <div className="container">
        <div className="row">
          {addData.map((data, index) => {
            return <Display key={index} {...data} />;
          })}
        </div>
      </div>
    </>
  );
}
