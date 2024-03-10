"use strict"
const axios = require("axios");
const { error } = require("console");
axios.get("https://pokeapi.co/api/v2/pokemon")
.then(response =>{
    console.log(response.data.results);
})
.catch(error =>{
    console.log(error)
})