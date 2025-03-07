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
pokemonImage.src = data.sprites.front_default; // Set the image source
pokemonImage.alt = data.name; // Set the alt text


searchButton.addEventListener("click", () => {
    const pokemon = searchInput.value.trim().toLowerCase(); // Get input & format it
    if (!pokemon) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }
    
    fetchPokemonData(pokemon);
});

async function fetchPokemonData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
        
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging line
        updateUI(data);
    } catch (error) {
        alert("Pokémon not found");
    }
}

function updateUI(data) {
    pokemonName.textContent = `Name: ${data.name}`;
    pokemonId.textContent = `ID: ${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    // Convert types array into a readable string
    types.textContent = `Type: ${data.types.map(type => type.type.name).join(", ")}`;

    // Update stats
    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defense.textContent = `Defense: ${data.stats[2].base_stat}`;
    specialAttack.textContent = `Sp. Attack: ${data.stats[3].base_stat}`;
    specialDefense.textContent = `Sp. Defense: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;
}