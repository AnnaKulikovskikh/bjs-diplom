'use strict'

function requestLog(data){
    ApiConnector.login(data, (response) => {
        //console.log(response);
        if (response.success) {
            location.reload();
        } else {
            using.loginErrorMessageBox.innerText = "Error";
        }
    });
}

function requestReg(data){
    ApiConnector.register(data, (response) => {
        //console.log(response);
        if (response.success) {
            location.reload();
        } else {
            using.registerErrorMessageBox.innerText = "Error";
        }
    });
}

let using = new UserForm();
using.loginFormCallback = requestLog;
using.registerFormCallback = requestReg;
