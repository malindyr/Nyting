class UserAccount{
    constructor(newUsername, newPassword, userID){
        this.newUsername = newUsername;
        this.newPassword = newPassword;
        this.userID = userID;
    }
}


function isValidUsername(){

let usernameValue = document.getElementById('username').value;
let isValid = true;
let feedback2 = '';

if (usernameValue.length < 3){
     isValid = false;
     feedback2 = "username must contain at least 3 characters"
} else {username = usernameValue;
}
   feedback2 = feedback2;
   return isValid;
}

function isValidPassword(){

let passwordValue = document.getElementById('password').value;
let isValid = true;
feedback1 = '';

if(passwordValue.length < 6){
   isValid = false;
   feedback1 = "password must contain atleast 6 characters";
}else if(!/[A-Z]/.test(passwordValue)){
  isValid = false;
  feedback1 = "password must contain atleast one uppercase letter";
}else if(!/[0-9]/.test(passwordValue)){
  isValid = false;
  feedback1 = "password must contain atleast one number"
}else {password = passwordValue;
}

  feedback1 = feedback1;
  return isValid;
}

function userCreate(){
    const newUsername = username;
    const newPassword = password;

    const newUserID = users.length + 1;

    const userAccount = new UserAccount(newUsername, newPassword, newUserID);
    users.push(userAccount);

    console.log('your username is: ' + newUsername);
    console.log('your password is: ' + newPassword);
    console.log('your user ID is: ' + newUserID);
}

function validateUserandPass(){

    let isValidUser = isValidUsername();
    let isValidPass = isValidPassword();

    if(isValidPass && isValidUser) {
        console.log('new user created');
        feedback1 = 'your user was successfully created! You can now write in your details and log in'
        feedback2 = 'console.log for user info and userID';
        userCreate();
    }
    updateView()
}

function login(){
    let usernameInp = document.getElementById('username').value;
    let passwordInp = document.getElementById('password').value;

    if(usernameInp === username && passwordInp === password){
        console.log('login successful');
        leaveLogIn()
    }
}
