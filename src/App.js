import React from 'react';
import './App.css';
import LeftBar1 from './leftBar/LeftBar1.js';
import ViewPage from './viewPage/ViewPage.js';

function App() {
  const [nameOfTheMatchInHeader, setNameOfTheMatchInHeader] = React.useState()

  const clickHandler = (data) => {
    setNameOfTheMatchInHeader(data)
  }
  return ( 
    <div style = {{display: "flex"}}>
      <LeftBar1 matchClick = {clickHandler}/>
      <ViewPage nameMatchHeader = {nameOfTheMatchInHeader}/>
    </div>
    
  );
}

export default App;
