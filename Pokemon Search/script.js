const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const pokemonImage = document.getElementById('pokemon-image');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');




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
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);

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
    pokemonName.textContent = data.name
    pokemonId.textContent = data.id
    weight.textContent = data.weight
    height.textContent = data.height

    
    if(data.sprites.front_default){
        let spriteImage = document.getElementById('sprite');
        if(!spriteImage){
            spriteImage = document.createElement('img');
            spriteImage.id = 'sprite';
            document.body.appendChild(spriteImage);
        }
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.style.display = 'block';
    }

    types.innerHTML = '';
    data.types.forEach(typeObj =>{
        const typeElement = document.createElement("span");
        typeElement.textContent = typeObj.type.name.toUpperCase();
        types.appendChild(typeElement);
    });

    hp.textContent = data.stats[0].base_stat
    attack.textContent = data.stats[1].base_stat
    defense.textContent = data.stats[2].base_stat
    specialAttack.textContent = data.stats[3].base_stat
    specialDefense.textContent = data.stats[4].base_stat
    speed.textContent = data.stats[5].base_stat
}