import React from 'react'
import style from './LogOutLogin.module.css'
import LogoHeart from './img/LogoHeart.png'
import Modal from 'react-modal';
import LogoReg from './img/LogoReg.png'
import close_button from './img/close_button.png'
import Vk from './img/vk.png'
import Google from './img/google.png'
import Facebook from './img/facebook.png'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderRadius          : '7%',
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
function LogOutLogin() {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        customStyles.Overlay.color = '#f00';
      }
    return (
    <div className= {style.Bos}>
            <div className ={style.HeaderLog}>
                <div className = {style.Logo}>
                    <b>CLove</b><img src={LogoHeart}width="30" height="30" style={{marginLeft:"5px"}}></img>
                </div>
                   <button className={style.ButtonLog}>Войдите</button>
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
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                onAfterOpen={afterOpenModal}
            >
            <form>
                <div className = {style.RegModal}>
                    <div onClick = {closeModal} className = {style.CloseButton}>
                        <img src = {close_button} width = "30" height = "30"/>
                    </div>
                    <img src={LogoReg}width="30" height="30" style={{marginBottom:"5px"}}></img>
                    <span>Регистрация</span>
                    <div className ={style.RegText}>Вы даете нам согласие на передачу своих персональных данных третьим лицам для их обработки в соответствии с целями, предусмотренными настоящей Политикой обработки персональных данных, на основании договоров, заключенных нами с этими третьими лицами и только в рамках таких договоров.</div>
                    <input placeholder="Придумайте Логин"/>
                    <input placeholder="Придумайте Пароль"/>
                    <input placeholder="Придумайте Имя"/>
                    <button className={style.RegBut}>Зарегистрироваться</button>
                    <div className = {style.Icons}>
                        <img src={Vk}width="30" height="30" style={{}}></img>
                        <img src={Google}width="30" height="30" style={{}}></img>
                        <img src={Facebook}width="30" height="30" style={{}}></img>
                    </div>
                </div>
            </form>
             </Modal>
    </div>
    )
}
export default LogOutLogin 