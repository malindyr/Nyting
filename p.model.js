/*/*Liste over pokemon
kunne registrere de man finner, fjerne om man skriver feil
De skal listes opp med navn, nummer og bilde
Man skal kunne gå inn på hver enkelt for å få opp en typ profilside med; Navn, større bilde, type og en liten funfact
Lnr modell, view og controller funksjoner*/ 

const model = {

    app : {
        page : "homepage"

    },

    inputs : {
        newPokemon : {
            name : '',
            nr : '',
        }
    }
    ,

    data : {

        pokemonsArray : [
            {
            name : "Ditto",
            nr : 1,
            info : "this pokemon is called Ditto",
            pic : `<img src="ditto.png">`
            },
            {
            name : "Charizard",
            nr : 2,
            info : "this charizard owns a toyota corolla",
            pic : `<img src="charizard.png">`
                },
            {               
            name : "Jason",
            nr : 3,
            info : "jason is 48 years old",
            pic : `<img src="jason.png">`,
            }
        ]

    },

}