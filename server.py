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
#функция удаления коллекции
def del_collection(cllctn):
    cllctn.drop()
#функция получения данных с коллекции
def return_collection(cllctn):
    arr = []
    for cllctn_ in cllctn.find():
        arr.append(cllctn_)
    return arr
    


new_show2 = {
    "mod": "from_me",
    "name": "Nikita",
    "message": "privet11111111111111",
    }
    
    
new_show = {
    "mod": "to_me",
    "name": "Natasha",
    "message": "ep tvouy mather",
    }
    

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
        "name" : "Alyena",
        "path" : "https://sun1-94.userapi.com/wp53UENcImsM0HeU1cIbV11p59rHiboXGykIsg/9fm_uvRmQRA.jpg"
    },
    { 
        "name" : "Маша",
        "path" : "https://sun1-30.userapi.com/7dsJIZqqpgSxhB1qaHQw67oeU38T4VKb21eArg/MlqGwzooTGA.jpg"
    },
    { 
        "name" : "Гриша",
        "path" : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg"
    },
    { 
        "name" : "Олег",
        "path" : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg"
    },
    { 
        "name" : "Гриша",
        "path" : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg"
    },
    { 
        "name" : "Олег",
        "path" : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg"
    },
    { 
        "name" : "Гриша",
        "path" : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg"
    },
    { 
        "name" : "Олег",
        "path" : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg"
    },
    { 
        "name" : "Гриша",
        "path" : "https://sun9-60.userapi.com/c845017/v845017836/d0559/rMpBqks77-0.jpg"
    },
    { 
        "name" : "Олег",
        "path" : "https://sun1-92.userapi.com/8rovY5G3Hozz6WWILV6wwv7dObOTVSFVFxlgOw/79riXGZEuVI.jpg"
    },
]
    return jsonify(result)

@app.route("/test_data")
def test_data():
    return JSONEncoder().encode(return_collection(series_collection))

@app.route('/get_message_and_send', methods=['POST', 'GET'])
def get_message_and_send():
    request_info = request.get_json(force=True)
    nameAuthor = request_info['name']
    textMessage = request_info['messageText']
    modificator = request_info['mod']
    data = {"message": textMessage, "name": nameAuthor, "mod": modificator}
    if(nameAuthor == "" and textMessage == "" and modificator == ""): 
        return JSONEncoder().encode(return_collection(series_collection))
    else:
        print(data)
        insert_document(series_collection,data)
        return JSONEncoder().encode(return_collection(series_collection))

    

app.run(host='0.0.0.0', debug=True, port=5001)