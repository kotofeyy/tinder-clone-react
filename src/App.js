import React from 'react';
import './App.css';
import LeftBar1 from './leftBar/LeftBar1.js';
import ViewPage from './viewPage/ViewPage.js';
import LogOutLogin from './viewPage/LogOutLogin/LogOutLogin.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [nameOfTheMatchInHeader, setNameOfTheMatchInHeader] = React.useState()
  const [token, setToken] = React.useState("")

  const clickHandler = (name, token) => {
    console.log(token)
    setNameOfTheMatchInHeader(name)
    setToken(token)
  }

  const clickHandlerProfile = () => {
    setToken("profile")
  }

  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div style = {{display: "flex"}}>
            <LeftBar1 matchClick = {clickHandler} profileClick = {clickHandlerProfile}/>
            <ViewPage nameMatchHeader = {nameOfTheMatchInHeader} tokenMessage = {token}/>
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
