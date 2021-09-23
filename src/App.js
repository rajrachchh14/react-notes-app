import React from 'react';
import Header from './Header';
import FormPart from './FormPart';
import Display from './Display';

export default function App() {
  let NotesSubmit = () => {
    console.log('me');
  };

  return (
    <>
      <Header />
      <FormPart passNote={NotesSubmit} />
      <Display />
    </>
  );
}
