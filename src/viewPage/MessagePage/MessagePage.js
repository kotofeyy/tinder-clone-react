import React from 'react'
import style from './MessagePage.module.css'
import close_button from './images/close_button.png'
import {getRequest, postRequest, GET_MESSAGE_AND_SEND} from '../../Api'
import { useForm } from "react-hook-form";


function MessagePage({nameMatchHeader_, closeClick}) {
    const [messages, setMessages] = React.useState()
    const [colorButton, setColorButton] = React.useState("#e0e4e9")
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.name = "Niktia"
        data.mod = "from_me"
        sendMessageAndGet(data)
        
    }

    React.useEffect(() => {
        let data = {}
        data.name = ""
        data.messageText = ""
        data.mod = ""
        sendMessageAndGet(data)
      }, [])


    const sendMessageAndGet = async (_date) => {
        await postRequest(GET_MESSAGE_AND_SEND, _date).then(function (responce) {
            console.log(responce['data'])
            setMessages(responce['data'])
        })
    }


    const handleChange = (e) => {
        if(e.target.value !== "") setColorButton("linear-gradient(262deg, #ff7854, #fd267d)")
        else setColorButton("#e0e4e9")
      }

    return(
        <div className = {style.MessageContent}>
            <div className = {style.Header}>
                <div className = {style.MessageAvatar}>
                    <img src = "https://sun1-94.userapi.com/wp53UENcImsM0HeU1cIbV11p59rHiboXGykIsg/9fm_uvRmQRA.jpg" width = "36" height = "36" />
                </div>
                <div className = {style.MessageName}>
                    Вы и {nameMatchHeader_} образовали пару
                </div>
                <div onClick = {() => closeClick && closeClick()} className = {style.CloseButton}>
                    <img src = {close_button} width = "36" height = "36"/>
                </div>
            </div>
            <div className = {style.MessageWindow}>
                {messages ? messages.map((val) => {
                    return  <div className = {val.mod == "from_me" ? style.FromMe : style.ToMe}>{val.message}  <span style = {{color: "black"}}>:{val.name}</span></div>
                }): ""}
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className = {style.MessageSend}>
                    {errors.messageText && ""}
                    <input onChange={handleChange} autocomplete="off" name="messageText" ref={register({required : true})} placeholder = "Введите сообщение"/>
                    <button style = {{background: colorButton}} type="submit">Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default MessagePage