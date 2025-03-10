const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const pokemonImage = document.getElementById('pokemon-image');

/*
fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
.then(response => response.json()) //convert response to json
.then(data => console.log(data))  //Handle the data
.catch(error => console.log(error)); //Handle any errors
*/


/*
There is a modern way to fetch requests

async function fetchPokemonData(pokemonName){
    try{
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon`);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchPokemonData('pikachu');

*/

searchButton.addEventListener('click', () =>{
    const pokemon = searchInput.value.trim().toLowerCase();   //input value

    if(!pokemon){
        alert("Please enter a Pokémon name or ID. ");
        return;
    }
    fetchPokemonData(pokemon);
})
