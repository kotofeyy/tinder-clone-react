import React from 'react'
import style from './MessagePage.module.css'
import close_button from './images/close_button.png'
import {getRequest, postRequest, GET_MESSAGE_AND_SEND} from '../../Api'
import { useForm } from "react-hook-form";
import SendButton from './SendButton/SendButton.js';
import CodeEncode from './CodeEncode/CodeEncode.js'

console.log("мой токен - ", document.cookie)




function MessagePage({nameMatchHeader_, closeClick, tokenToMe}) {
    const [messages, setMessages] = React.useState()
    const [colorButton, setColorButton] = React.useState("#e0e4e9")
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.myToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        data.tokenToMe = tokenToMe
        sendMessageAndGet(data)
        
        
    }

    React.useEffect(() => {
        let data = {}
        data.tokenToMe = tokenToMe
        data.messageText = ""
        data.myToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        sendMessageAndGet(data)
      }, [tokenToMe])

    React.useEffect(() => {
        let data = {}
        data.tokenToMe = tokenToMe
        data.messageText = ""
        data.myToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        sendMessageAndGet(data)
      }, [])


    const sendMessageAndGet = async (_date) => {
        await postRequest(GET_MESSAGE_AND_SEND, _date).then(function (responce) {
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
                    return  <div className = {val.token ==  document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1") ? style.FromMe : style.ToMe}>{CodeEncode(val.message, -3)}  </div>
                }): ""}
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className = {style.MessageSend}>
                    {errors.messageText && ""}
                    <input onChange={handleChange} autocomplete="off" name="messageText" ref={register({required : true})} placeholder = "Введите сообщение"/>
                    <SendButton />
                </div>
            </form>
        </div>
    )
}

export default MessagePage