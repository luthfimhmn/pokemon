const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');


app.get('/', async (req,res) => {
    try {
        const {offset, limit} = req.query;
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.get('/pokemon/catch', async (req,res)=> {
    try {
        let result = false;
        const rng = Math.random()

        if(rng >= 0.5) result = true

        res.status(200).json({
            result
        })
    } catch (error) {
        console.log(error)
    }
} )

app.delete('/pokemon/:id', async (req,res)=> {
    try {
        let { pokemons } = req.body;
        const id = req.params.id;

        const result = pokemons.filter(pokemon => pokemon.id !== id) 
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () => console.log(`This server is running on port :${PORT}`))
