import React from 'react'



let alfabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"

export default function CodeEncode(text, key) { 
    if (text == null) throw new Error('Нет текста');
    if (key == null) throw new Error('Нет ключа');
    let fullAlfabet = alfabet + alfabet.toLowerCase()
    console.log(fullAlfabet)
    let letterQty = fullAlfabet.length
    let retVal = ""
    for (var i = 0; i < text.length; i++) { 
        let c = text[i]
        var index = fullAlfabet.indexOf(c)
        
        if(index == -1) retVal += c
        else { 
            let codeIndex = (letterQty + index + key) % letterQty
            retVal += fullAlfabet[codeIndex]
        }
    }

    return retVal
}
