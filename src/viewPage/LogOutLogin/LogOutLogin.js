import React from 'react'
import style from './LogOutLogin.module.css'

function LogOutLogin() {
    return (
        <div className = {style.Login}>
            <form>
                <div className = {style.Inputs}>
                    <label for="login">Логин</label>
                    <input autocomplete="off" id = "login"/>
                    <label for="password">Пароль</label>
                    <input autocomplete="off" id = "password"/>
                    <button type = "submit">Войти</button>
                </div>
            </form>
        </div>
    )
}
export default LogOutLogin