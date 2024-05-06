let currentChat = 0;
function drawChat(){

    let messageNr = 0;
    for(i=0; i<model.data.users[currentChat].chats[currentChat].messages[currentChat].length; ){
        messageNr += 1;
    }
    return messageNr;
} console.log(drawChat())

function chatPageView(){
    model.app.page = 'chatPage'
    document.getElementById('app').innerHTML=/*HTML*/`
    <div>${model.data.users[index].chats[0].messages[i].content}</div>
    <input placeholder="write a message">
    <button>send</button>
    `
    console.log(model.data.users[index].chats[index].messages[index].content)
}

