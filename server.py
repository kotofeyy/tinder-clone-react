# -*- coding: utf-8 -*-
from flask import jsonify, Flask, render_template, request, redirect, url_for, session, flash
from flask_cors import CORS

import datetime
import pandas as pd
import random
import traceback
import pymongo
from pymongo import MongoClient
import json
from bson import ObjectId
from random import choice
from string import ascii_uppercase
import hashlib

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)
# подключаемся к монгоДБ
client = MongoClient('localhost', 27017)

#получаем доступ к определённой БД
db = client['MessageDB']

#получаем коллекцию
series_collection = db["message"]
users_collection = db['users']

#функция для создания документа в монгоДБ
def insert_document(collection, data):
     collection.insert_one(data).inserted_id

#функция поиска документа
def find_document(collection, elements, multiple=False):
    if multiple:
        results = collection.find(elements)
        return [r for r in results]
    else:
        return collection.find_one(elements)
def check_data_in_collection(collection, data):
    if (collection.count(data)):
        return True
    else:
        return False
#функция удаления коллекции
def del_collection(cllctn):
    cllctn.drop()
#функция получения данных с коллекции
def return_collection(cllctn):
    arr = []
    for cllctn_ in cllctn.find():
        arr.append(cllctn_)
    return arr
    
    
#print(''.join(choice(ascii_uppercase) for i in range(12)))
#print(return_collection(series_collection))
#series_collection.insert_many([new_show,new_show2])
#insert_document(series_collection,new_show2)








app = Flask(__name__, static_folder="build/static", template_folder="build")
CORS(app)

app.config['JSON_AS_ASCII'] = False

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/manifest.json")
def manifest():
    return send_from_directory('./build', 'manifest.json')


@app.route("/any_page")
def any_page():
    result = [ 
    { 
        "name" : "Natasha",
        "path" : "https://sun1-94.userapi.com/wp53UENcImsM0HeU1cIbV11p59rHiboXGykIsg/9fm_uvRmQRA.jpg",
        "token" : "JQTLPWJIJACE"
    },
    { 
        "name" : "Lena",
        "path" : "https://sun1-30.userapi.com/7dsJIZqqpgSxhB1qaHQw67oeU38T4VKb21eArg/MlqGwzooTGA.jpg",
        "token" : "SQYCXFLCKEWH"
    },
    { 
        "name" : "Misha",
        "path" : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg",
        "token" : "CZMXANJBROPN"
    },
    { 
        "name" : "Nikita",
        "path" : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg",
        "token": "LCRJEWMRCLRL"
    },
]
    return jsonify(result)

@app.route("/test_data")
def test_data():
    return JSONEncoder().encode(return_collection(series_collection))

alfabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
def CodeEncode(text, key):
    fullAlfabet = alfabet + alfabet.lower()
    letterQty = len(fullAlfabet)
    retVal = ""
    for i in text:
        index = fullAlfabet.find(i)
        if(index == -1):
            retVal += i
        else:
            codeIndex = (letterQty + index + key) % letterQty
            retVal += fullAlfabet[codeIndex]
    return retVal


@app.route('/get_message_and_send', methods=['POST', 'GET'])
def get_message_and_send():
    request_info = request.get_json(force=True)
    textMessage = request_info['messageText']
    tokenToMe = request_info['tokenToMe']
    myToken = request_info['myToken']
    Code = CodeEncode(textMessage, 3)
    data = {"message": Code, "token": myToken}
    message_collections = db[myToken +"_" + tokenToMe]
    arr = []
    for names in db.collection_names():
        if names.find(myToken) !=-1:
             arr.append(names)
    for names2 in arr:
        if names2.find(tokenToMe) !=-1:
             message_collections = db[names2]
    if(textMessage == ""): 
        return JSONEncoder().encode(return_collection(message_collections))
    else:
        insert_document(message_collections, data)
        return JSONEncoder().encode(return_collection(message_collections))

    
@app.route("/registration_new_user", methods=['POST', 'GET'])
def registration_new_user():
    request_info = request.get_json(force=True)
    nameUser = request_info['newName']
    passwordUser = request_info['newPassword']
    loginUser = request_info['newLogin']
    tokenUser = ''.join(choice(ascii_uppercase) for i in range(12))
    data = {"username" : nameUser, "login" : loginUser, "password" : passwordUser, "token" : tokenUser}
    insert_document(users_collection, data)
    return tokenUser

@app.route("/login_user", methods=['POST', 'GET'])
def login_user():
    request_info = request.get_json(force=True)
    passwordUser = request_info['password']
    loginUser = request_info['login']
    data = {"login": loginUser, "password": passwordUser}
    if(check_data_in_collection(users_collection, data)):
        tokenUser = find_document(users_collection, {"password":passwordUser, "login": loginUser})['token']
        return tokenUser
    else:
        return ""

    


app.run(host='0.0.0.0', debug=True, port=5001)