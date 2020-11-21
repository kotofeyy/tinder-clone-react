import React from 'react';
import style from './viewPage.module.css'
import MessagePage from './MessagePage/MessagePage'
import LogOutLogin from './LogOutLogin/LogOutLogin.js'
import ViewSwitcher from './ViewSwitcher.js'

function ViewPage({nameMatchHeader}) {
    const [currentScreen, setCurretScreen] = React.useState(0)
    const closeClickHandler = () => {
        setCurretScreen(1)
      }
    return (
        <ViewSwitcher currentScreen = {currentScreen}>
            <MessagePage nameMatchHeader_ = {nameMatchHeader} closeClick = {closeClickHandler}/>
            <div>fff</div>
        </ViewSwitcher>
    )
}

export default ViewPage;