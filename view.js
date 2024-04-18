updateView()
function updateView(){
        document.getElementById('app').innerHTML=/*HTML*/`
        <div>${infoText}</div>
        <label for="username">username<input type="text" id="username"></label>
        <br/>
        <label for="password">password<input type="text" id="password"></label>
        <br/>
        <button onclick="validateUserandPass()">submit</button>
        <button onclick="login()">log in</button>
        <br/>
        <div>${feedback1}</div>
        <br/>
        <div>${feedback2}</div>
        `}

function leaveLogIn(){
        let homePage = document.getElementById('app').innerHTML = /*HTML*/ `
        you're logged in!
            `
          
           
        };