const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const cors = require('cors');


app.use(cors());
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended:false}))


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
        let release = false
        let { pokemons } = req.body;
        const id = req.params.id;

        const rng = Math.floor(Math.random() * 10) + 1;

        //Check prime number
        const primeCheck = n => n <= 1 ? false : !Array.from(new Array(n), (el, i) => i + 1).filter(x => x > 1 && x < n).find(x => n % x === 0);

        const isPrime = primeCheck(rng)
        if(isPrime) release = true

        // const result = pokemons.filter(pokemon => pokemon.id !== id) 
        res.status(200).json({result: release, id})
    } catch (error) {
        console.log(error)
    }
})

app.post('/pokemon/rename/:id', async(req,res)=> {
    try {
       const {number} = req.body;
       const {id} = req.params;

       function fib(n) {
        if(n<= 1) {
            return n;
        } else { 
            return fib(n-1) + fib(n-2)
        }
       }

       const fibonnaci = fib(number.length)
       res.status(200).json({nextFib: fibonnaci, id})
    } catch (error) {
        
    }
})


app.listen(PORT, () => console.log(`This server is running on port :${PORT}`))
