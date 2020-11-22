import React from 'react';
import './App.css';
import LeftBar1 from './leftBar/LeftBar1.js';
import ViewPage from './viewPage/ViewPage.js';
import LogOutLogin from './viewPage/LogOutLogin/LogOutLogin.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [nameOfTheMatchInHeader, setNameOfTheMatchInHeader] = React.useState()

  const clickHandler = (data) => {
    setNameOfTheMatchInHeader(data)
  }
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div style = {{display: "flex"}}>
            <LeftBar1 matchClick = {clickHandler}/>
            <ViewPage nameMatchHeader = {nameOfTheMatchInHeader}/>
          </div>
        </Route>
        <Route exact path="/LogOutLogin">
          <LogOutLogin/>
        </Route>
      </Switch>
    </BrowserRouter>
      );
}

export default App;
