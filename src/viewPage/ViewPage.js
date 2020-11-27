import React from 'react';
import style from './viewPage.module.css'
import MessagePage from './MessagePage/MessagePage'
import ViewSwitcher from './ViewSwitcher.js'
import Profile from './Profile/Profile.js'

function ViewPage({nameMatchHeader}) {
    const [currentScreen, setCurretScreen] = React.useState(1)
    const closeClickHandler = () => {
        setCurretScreen(1)
      }
    return (
        <ViewSwitcher currentScreen = {currentScreen}>
            <MessagePage nameMatchHeader_ = {nameMatchHeader} closeClick = {closeClickHandler}/>
            <Profile> </Profile>
        </ViewSwitcher>
    )
}

export default ViewPage;