"use strict"
function funcLogout(){
    ApiConnector.logout((response) => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            loginErrorMessageBox();
        }
    });
}

let logout = new LogoutButton();
logout.action = funcLogout;
ApiConnector.current((response) => {
    if (response.success) {ProfileWidget.showProfile(response.data)};
});

let course = new RatesBoard();

let requestCourses = function() {
    ApiConnector.getStocks((response) => {
        if (response.success){
            course.clearTable;
            course.fillTable(response.data);
        }
    });
};
requestCourses();

let money = new MoneyManager();
money.addMoneyCallback = requestManager;

function requestManager(){
    ApiConnector.addMoney(addMoneyCallback, (response) => {console.log(response)});
    //Используйте аргумент функции свойства addMoneyCallback для передачи данных data в запрос.
}