import React from 'react'
import style from './LogOutLogin.module.css'
import LogoHeart from './img/LogoHeart.png'
import Modal from 'react-modal';
import LogoReg from './img/LogoReg.png'
import close_button from './img/close_button.png'
import Vk from './img/vk.png'
import Google from './img/google.png'
import Facebook from './img/facebook.png'
import {
    getRequest, 
    postRequest, 
    REGISTRATION_NEW_USER,
    LOGIN_USER} from '../../Api'
import { useForm } from "react-hook-form";
import LogButton from './LogButton/LogButton.js'
import RegNewUser from './RegNewUser/RegNewUser.js'

const URL = 'http://localhost:3000/'
const URL_LOGOUT = "http://localhost:3000/LogOutLogin"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderRadius          : '15px',
    },
    Overlay:{
        background:'black',
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
    }
  };

  function CookiesDelete() {
    var mydate = new Date();
    mydate.setTime(mydate.getTime() - 1);
    document.cookie = "token=;" + "expires=Thu, 01 Jan 1970 00:00:00 GMT;"; 
    setTimeout(function(){
        document.location.href = URL
    }, 50);
}

function LogOutLogin() {
    //модал регистрации
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [logmodalIsOpen,setIsOpenLog] = React.useState(false);
    const [token, setToken] = React.useState("")
    const { register, handleSubmit, errors } = useForm();

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    //модал входа
    function openModalLog() {
        setIsOpenLog(true);
    }
    function closeModalLog(){
        setIsOpenLog(false);
    }

    const onSubmit = data => {
        console.log("данные фморы - ", data)
        RegNewUser(data)
        closeModal()
        /*setTimeout(function(){
            document.location.href = URL
          }, 50);*/
    }

    const onSubmitLog = data => {
        console.log("данные фморы - ", data)
        loginUser(data)
        
        closeModalLog()
        setTimeout(function(){
            document.location.href = URL
          }, 50);
       
        
        
    }

    /*const regNewUser = async (_date) => {
        await postRequest(REGISTRATION_NEW_USER, _date).then(function (responce) {
            document.cookie = "token=" + responce['data'] + ";"
            setToken(responce['data'])
            
        })
    }*/
    const loginUser = async (_date) => {
        await postRequest(LOGIN_USER, _date).then(function (responce) {
            console.log("ответ - ", responce['data'])
            if (responce['data'] == "") {
                CookiesDelete()
                console.log("неправильные данные")
                setToken("")
                openModalLog()
            }
            else {
                document.cookie = "token=" + responce['data'] + ";"
                setToken(responce['data'])
                console.log("правильные данные")
            }
            
            
        })
    } 

    return (
    <div className= {style.Bos}>
            <div className ={style.HeaderLog}>
                <div className = {style.Logo}>
                    <b>CLove</b><img src={LogoHeart}width="30" height="30" style={{marginLeft:"5px"}}></img>
                </div>
                   <button onClick={openModalLog} className={style.ButtonLog}>Войдите</button>
            </div>
            <div className={style.TextView}>
                <div className={style.TextIn}>
                Найди свою любовь!
                </div>           
            </div>
            <div className={style.WrapRegBut}>
                <button onClick={openModal} className ={style.RegBut}>Зарегистрироваться</button>
            </div>
            <div className ={style.WrapLicense}>
                <div className= {style.TextLicense}>
                    Все представленные фотографии являются фотографиями моделей и используются исключительно в демонстрационных целях
                </div>
            </div>
            <Modal
                //модал регистрации
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                
            >
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className = {style.RegModal}>
                    <div onClick = {closeModal} className = {style.CloseButton}>
                        <img src = {close_button} width = "30" height = "30"/>
                    </div>
                    <img src={LogoReg}width="30" height="30" style={{marginBottom:"5px"}}></img>
                    <span>Регистрация</span>
                    <div className ={style.RegText}>Вы даете нам согласие на передачу своих персональных данных третьим лицам для их обработки в соответствии с целями, предусмотренными настоящей Политикой обработки персональных данных, на основании договоров, заключенных нами с этими третьими лицами и только в рамках таких договоров.</div>
                    {errors.newLogin && "Введите логин"}
                    <input name="newLogin" ref={register({required : true})} placeholder="Придумайте Логин"/>
                    {errors.newPassword && "Введите пароль"}
                    <input name="newPassword" ref={register({required : true})} placeholder="Придумайте Пароль"/>
                    {errors.newName && "Введите Имя"}
                    <input name="newName" ref={register({required : true})} placeholder="Придумайте Имя"/>
                    <button className={style.RegBut}>Зарегистрироваться</button>
                    <div className = {style.Icons}>
                        <img src={Vk}width="30" height="30" style={{}}></img>
                        <img src={Google}width="30" height="30" style={{}}></img>
                        <img src={Facebook}width="30" height="30" style={{}}></img>
                    </div>
                </div>
            </form>
         </Modal>
        <Modal
                //модал входа
                isOpen={logmodalIsOpen}
                onRequestClose={closeModalLog}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                >
                <form onSubmit={handleSubmit(onSubmitLog)}>
                <div className = {style.RegModal}>
                    <div onClick = {closeModalLog} className = {style.CloseButton}>
                        <img src = {close_button} width = "30" height = "30"/>
                    </div>
                    <img src={LogoReg}width="30" height="30" style={{marginBottom:"5px"}}></img>
                    <span>Войдите</span>
                    <div className ={style.RegText}>Вы даете нам согласие на передачу своих персональных данных третьим лицам для их обработки в соответствии с целями, предусмотренными настоящей Политикой обработки персональных данных, на основании договоров, заключенных нами с этими третьими лицами и только в рамках таких договоров.</div>
                    {errors.login && "Введите логин"}
                    <input name="login" ref={register({required : true})} placeholder="Введите Логин"/>
                    {errors.password && "Введите пароль"}
                    <input name="password" ref={register({required : true})} placeholder="Введите Пароль"/>
                    <LogButton />
                </div>
            </form>   
           </Modal>
    </div>
    )
}
export default LogOutLogin 