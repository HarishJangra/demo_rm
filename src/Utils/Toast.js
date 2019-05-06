import React from 'react'
import Toast from 'react-native-tiny-toast'

export default function showToast(message, type, duration){
    Toast.show(message , {
        position: -100,
        duration:900,
        textColor: type == 'success' ? 'cyan' : type == 'error'? 'red' : type == 'info'? 'orange' : "white",
        containerStyle:{
            backgroundColor:'black',
            borderRadius:0,
            padding:10,
            margin:10,
        },
    })
}


export function showLoading (message =""){
    Toast.showLoading(message, {
        position:0,
        containerStyle:{
          backgroundColor:'transparent'  
        },
        textColor:'cyan',
        maskColor:'rgba(200, 200, 200, 0.5)'
    })

}

export function showErrorToast(message){
    showToast(message , 'error')
}

export function showInfoToast(message){
    showToast(message , 'info')

}

export function showSuccessToast(message){
    showToast(message, 'success')
}