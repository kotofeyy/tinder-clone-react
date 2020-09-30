import React from 'react'
import style from './leftBar.module.css'
import avatar from './avatar.jpg'
import one from './1.jpg'

const data = [ 
    { 
        name : "Алёна",
        path : "https://sun1-94.userapi.com/wp53UENcImsM0HeU1cIbV11p59rHiboXGykIsg/9fm_uvRmQRA.jpg"
    },
    { 
        name : "Маша",
        path : "https://sun1-30.userapi.com/7dsJIZqqpgSxhB1qaHQw67oeU38T4VKb21eArg/MlqGwzooTGA.jpg"
    },
    { 
        name : "Гриша",
        path : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg"
    },
    { 
        name : "Олег",
        path : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg"
    },
]

function LeftBar1() {
    return (
        <div className = {style.leftWrap}>
            <div className = {style.HeaderWrap}>
                <div className = {style.Avatar}>
                    <img src =  {avatar} width = "36" height = "36" />
                </div>
                <div className = {style.MyProfile}>
                    Мой профиль
                </div>
            </div>
            <div className = {style.MM}> 
                <div className = {style.Message}> Пары </div>
                <div className = {style.Match}> Сообщения</div>
            </div>
            <div> 
            
            <div className = {style.MatchWrap}>
                {data.map((val) => {
                    return <div className = {style.MatchAvatar}><img src = {val.path} width = "89" height = "120"/><span className = {style.AvatarName}>{val.name}</span></div>
                })}
            </div>
            
            </div>
        </div>
    )
}

export default LeftBar1;