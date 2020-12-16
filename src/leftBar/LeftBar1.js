import React from 'react'
import style from './leftBar.module.css'
import {getRequest, ANY_PAGE} from '../Api'



function LeftBar1({matchClick, profileClick}) {
const [data, setData] = React.useState()

    React.useEffect(() => {
        
        fetch_data()
      }, [])

    const fetch_data = async () => {
        const data = await getRequest(ANY_PAGE)
        setData(data['data'])
      }

    

    
    return (
        <div className = {style.leftWrap}>
            <div className = {style.HeaderWrap}>
                <div className = {style.Avatar}>
                    <img src =  "https://sun1-94.userapi.com/wp53UENcImsM0HeU1cIbV11p59rHiboXGykIsg/9fm_uvRmQRA.jpg" width = "36" height = "36" />
                </div>
                <div className = {style.MyProfile} onClick = {() => profileClick()}>
                    Мой профиль
                </div>
            </div>
            <div className = {style.MM}> 
                <div className = {style.Message}> Пары </div>
                <div className = {style.Match}> Сообщения</div>
            </div>
            <div> 
            
            <div className = {style.MatchWrap}>
                {data ? data.map((val) => {
                    return <div onClick = {() => {matchClick(val.name, val.token)}} className = {style.MatchAvatar}><img src = {val.path} width = "89" height = "120"/><span className = {style.AvatarName}>{val.name}</span></div>
                }): ""}
            </div>
            
            </div>
        </div>
    )
}

export default LeftBar1;