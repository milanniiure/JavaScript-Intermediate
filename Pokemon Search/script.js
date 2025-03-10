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
});


async function fetchPokemonData(pokemon){
    try{
        const response = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/' + pokemon);

        if(!response.ok){
            alert("Pokémon not found.");
            return;
        }
        const data = await response.json();
        updateUI(data);
    }catch(error){
        alert("Pokémon not found.");
    }
    
}

function updateUI(data){
    pokemonName.textContent = `Name: ${data.name}`;
    pokemonId.textContent = `ID: ${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    if(data.sprites.front_default){
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.style.display = 'block';
    }else{
        pokemonImage.style.display = 'none';
    }
    types.textContent = `Types: ${data.types.map(type => type.type.name).join(', ')}`; //extract data types array and convert them into comma-separated strings

    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defense.textContent = `Defense: ${data.stats[2].base_stat}`;
    specialAttack.textContent = `Special Attack: ${data.stats[3].base_stat}`;
    specialDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;

}