

function updateHomeView() {
    model.app.page="homepage"

    let pokemonInfo = '';
    for (i = 0; i < model.data.pokemonsArray.length; i++) {
        pokemonInfo += model.data.pokemonsArray[i].name
            + `</br>` + model.data.pokemonsArray[i].nr
            + `<button onclick="removePokemon(${i})">remove</button>`
            + `</br>`
            + `<button onclick="showInfo(${i})">about</button>`
            + `</br>` + `</br>`;
                    
    }
    document.getElementById('app').innerHTML = `
    
    <div>${pokemonInfo}</div>
    <br/>
    <label>pokemonName <input id="nameInput"> </label>
    <br/>
    <label>pokemonnr <input id="nrInput"> </label>
    <br/>
    <button onclick="pushPokemon()">push</button>
    `
}

function showInfo(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div></div>
    `
}

updateHomeView()

function showInfo(index){
    model.app.page = "profilepage"
    document.getElementById('app').innerHTML=`
    <div>${model.data.pokemonsArray[index].info}</div>
    <br/>
    <div>${model.data.pokemonsArray[index].pic}</div>
    <button onclick="updateHomeView()">back</button>
    `
}