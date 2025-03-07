const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const pokemonName = document.getElementById('pokemonName');
const pokemonId = document.getElementById('pokemonId');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('specialAttack');
const specialDefense = document.getElementById('specialDefense');
const speed = document.getElementById('speed');

async function fetchPokemonData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
        
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        alert("Pokémon not found");
    }
}

searchButton.addEventListener("click", () => {
    const pokemon = searchInput.value.trim().toLowerCase(); // Get input & format it
    if (!pokemon) {
        alert("Pokémon not found");
        return;
    }
    
    fetchPokemonData(pokemon);
});