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

fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
.then(response => response.json()) //convert response to json
.then(data => console.log(data))  //Handle the data
.catch(error => console.log(error)); //Handle any errors