function tempSaveUsername(username){
    model.inputs.logIn.username = username;
}

function tempSavePassword(password){
    model.inputs.logIn.password = password;
}

function checkLogInInfo() {
    let found = false;
    for (let user of model.data.users) {
        if (model.inputs.logIn.username === user.username) {
            console.log('Logged in');
            model.app.currentUser = user; //user is NOT an index!!!!!!
            displayUsers()
            found = true;
            break;
        }else{
            console.log('something went wrong')}
    }homeView();
}
