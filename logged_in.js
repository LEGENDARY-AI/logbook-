let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username= window.prompt("Enter username");
    password= window.prompt("Enter password");

    if(username === "andygambo" && password === "andygambo"){
        loggedIn=true
        console.log("welcome to Spacez")
    }
    else if(username !== "andygambo" && password === "andygambo"){
        loggedIn=!true
        console.log("invalid useranme")
    }
    else if(username === "andygambo" && password !== "andygambo"){
        loggedIn=!true
        console.log("invalid password")
    }
    else{
        loggedIn=!true
        console.log("invalod input please log in again!!")
    }
}    