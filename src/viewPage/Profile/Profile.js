import React from 'react'
import style from './Profile.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const URL = "http://localhost:3000/LogOutLogin"

function CookiesDelete() {
    var mydate = new Date();
    mydate.setTime(mydate.getTime() - 1);
    document.cookie = "token=;" + "expires=Thu, 01 Jan 1970 00:00:00 GMT;"; 
    setTimeout(function(){
        document.location.href = URL
    }, 50);
}

const slider = (
  <AwesomeSlider>
    <div><img src = "https://sun4-11.userapi.com/impf/c844521/v844521430/11b23c/UlmsEo9RPqk.jpg?size=2560x1704&quality=96&proxy=1&sign=2e2dc5f49553c3a3a15cc0c70621f1da" width = "100%" height = "auto" /></div>
    <div><img src = "https://sun9-40.userapi.com/impf/c844417/v844417735/24d5c/YZHN4QrwbWU.jpg?size=1438x1629&quality=96&proxy=1&sign=dec0d4877807d1489b2da3cbcc27dc12" width = "100%" height = "auto" /></div>
    <div><img src = "https://sun9-72.userapi.com/impf/c840725/v840725842/2756f/j02zS1n6ngQ.jpg?size=1622x2160&quality=96&proxy=1&sign=17f14e3c10c1b9b09e0763207f0199b2" width = "100%" height = "auto" /></div>
    <div><img src = "https://sun9-38.userapi.com/impf/c834300/v834300903/22e5/hNn98tVoGnc.jpg?size=1142x562&quality=96&proxy=1&sign=77d04c29670d6a1af15dc02edf870dcf" width = "100%" height = "auto" /></div>
  </AwesomeSlider>
);
function Profile() {
    React.useEffect(() => {
        if (document.cookie == "") {
            document.location.href = URL
        }
      }, [])
    return( 
        <div className={style.Bos}>
            <div className = {style.WrapLeftAbout}>
                <div className={style.WrapMyName}>
                    <div className={style.MyName}>
                    <h1>Чернышов Александр</h1>
                        <div className={style.MyAbout}>
                            <span>Город: Новосибирск</span>
                            <span>Возраст: 23 года</span>
                            <span>Гендер:Гетеро</span>
                        </div>
                    </div>
                </div>
                <div className={style.MyImages}>{slider}</div>
            </div>
            <div className={style.WrapAboutMe}>
                <div className={style.AboutMe}>
                    <button onClick = {() => CookiesDelete()}>Выйти из аккаунта</button>
                    rekgoregkreg
                </div>
             </div>
        </div>
    )
}
export default Profile;