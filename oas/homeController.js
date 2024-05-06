
function displayUsers(){
    model.app.currentUser.displayedUsers = [];
    for(i=0; i<model.data.users.length; i++){
        model.app.currentUser.displayedUsers.push(model.data.users[i]);
    }
}
function yesClicked(){
    model.data.users[model.app.currentUser.userId].likedUsers.push(model.app.currentUser.displayedUsers[index]);
    model.app.currentUser.displayedUsers.splice(index, 1);
    index = (index + 1) % (model.app.currentUser.displayedUsers.length + 1);
    console.log(model.data.users[model.app.currentUser.userId].likedUsers)
    homeView()
}

function noClicked(){
    model.app.currentUser.displayedUsers.splice(index, 1)
    homeView()
}
