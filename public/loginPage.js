'use strict'

function requestLog(data){
    if (ApiConnector.login(data)) {
        if (loginFormCallback()){
            return location.reload();
        }
        loginErrorMessageBox();    
    }
    loginErrorMessageBox()  ;  
}

function requestReg(data){
    if (ApiConnector.login(data)) {
        if (registerFormCallback()){
            return location.reload();
        }
        registerErrorMessageBox()    
    }
    registerErrorMessageBox()    
}

let using = new UserForm();
using.loginFormCallback = requestLog(data);
using.registerFormCallback = requestReg(data);
