import React from 'react';
import style from './viewPage.module.css'
import MessagePage from './MessagePage/MessagePage'
import ViewSwitcher from './ViewSwitcher.js'

function ViewPage({nameMatchHeader}) {
    const [currentScreen, setCurretScreen] = React.useState(0)
    const closeClickHandler = () => {
        setCurretScreen(1)
      }
    return (
        <ViewSwitcher currentScreen = {currentScreen}>
            <MessagePage nameMatchHeader_ = {nameMatchHeader} closeClick = {closeClickHandler}/>
            <> </>
        </ViewSwitcher>
    )
}

export default ViewPage;