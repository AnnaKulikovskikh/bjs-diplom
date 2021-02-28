'use strict'

function requestLog(data){
    ApiConnector.login(data, (response) => {
        if (response.success) {
            location.reload();
        } else {
            using.setLoginErrorMessage(response.data);
        }
    });
}

function requestReg(data){
    ApiConnector.register(data, (response) => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            using.setRegisterErrorMessage(response.data);
        }
    });
}

let using = new UserForm();
using.loginFormCallback = requestLog;
using.registerFormCallback = requestReg;
