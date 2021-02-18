"use strict"
function funcLogout(){
    if (logout)
    location.reload();
}

let logout = new LogoutButton();
logout.action = funcLogout();

let course = new RateBoard();
