import React from 'react';
import style from './viewPage.module.css'
import MessagePage from './MessagePage/MessagePage'
import LogOutLogin from './LogOutLogin/LogOutLogin.js'
import ViewSwitcher from './ViewSwitcher.js'
import Profile from './Profile/Profile.js'

function ViewPage({nameMatchHeader, tokenMessage}) {
    const [currentScreen, setCurretScreen] = React.useState(2)
    const closeClickHandler = () => {
        setCurretScreen(2)
      }
      React.useEffect(() => {
        
        if (tokenMessage !== "") {
            setCurretScreen(0)
        }
        else if(tokenMessage == "profile") {
            setCurretScreen(2)
        }
        else setCurretScreen(2)
      }, [tokenMessage])
    
    return (
        <ViewSwitcher currentScreen = {currentScreen}>
            <MessagePage nameMatchHeader_ = {nameMatchHeader} closeClick = {closeClickHandler} tokenToMe = {tokenMessage}/>
            <LogOutLogin />
            <Profile />
        </ViewSwitcher>
    )
}

export default ViewPage;