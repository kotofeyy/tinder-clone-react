import React from 'react'
import {
    postRequest, 
    REGISTRATION_NEW_USER,} from '../../../Api'

function RegNewUser (_date) {
    console.log("Функция вызвалась)", _date)
    //Проверка на длину
    if (_date.newName.length <= 3) {throw new Error('Слишком короткое имя')} ;
    if (_date.newPassword.length <= 3) throw new Error('Слишком короткий пароль');
    if (_date.newLogin.length <= 3) throw new Error('Слишком короткий логин');
    //Проверка на пустоту
    if (_date.newName.length == 0) {throw new Error('Пусто')} ;
    if (_date.newPassword.length == 0) throw new Error('Пусто');
    if (_date.newLogin.length == 0) throw new Error('Пусто');
    //Проверка на Верхний регистр
    if (_date.newName == _date.NewName.toUpperCase()) {throw new Error('Буквы написаны капсом')} ;
    if (_date.newPassword == _date.newPassword.toUpperCase()) throw new Error('Буквы написаны капсом');
    if (_date.newLogin == _date.newLogin.toUpperCase()) throw new Error('Буквы написаны капсом');
    //Проверка на максимум
    if (_date.newName.length >= 13) {throw new Error('Слишком длинное имя')} ;
    if (_date.newPassword.length >= 13) throw new Error('Слишком длинный пароль');
    if (_date.newLogin.length >= 13) throw new Error('Слишком длинный логин');

    postRequest(REGISTRATION_NEW_USER, _date).then(function (responce) {
    })
    
    
}

export default RegNewUser