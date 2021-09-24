import React, { useState } from 'react';
import Header from './Header';
import FormPart from './FormPart';
import Display from './Display';

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
      {addData.map((data, index) => {
        return <Display key={index} {...data} />;
      })}
    </>
  );
}
