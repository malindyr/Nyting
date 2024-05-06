function logInView(){
    document.getElementById('app').innerHTML=/*HTML*/`
    <div>
        <input placeholder="username" onchange="tempSaveUsername(this.value)">
        <input placeholder="password" onchange="tempSavePassword(this.value)">
        <button onclick="checkLogInInfo()">log in</button>
    </div>
    `

}
console.log(model.app.page);