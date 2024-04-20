function removePokemon(index){
model.data.pokemonsArray.splice(index, 1);
updateHomeView()
} console.log(model.data.pokemonsArray);

function pushPokemon(){

    model.inputs.newPokemon.name = document.getElementById('nameInput').value;
    model.inputs.newPokemon.nr = document.getElementById('nrInput').value;

    let pokemonToAdd = {
        name : model.inputs.newPokemon.name,
        nr : model.inputs.newPokemon.nr,
    }

    model.data.pokemonsArray.push(pokemonToAdd);
    updateHomeView()

}