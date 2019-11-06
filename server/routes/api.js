const API_KEY = 'd1b727088c113dae3ece2952eac32c34'

const express = require('express')
const axios = require('axios')
//Create Router Middleware access
const router = express.Router()

router.get('/', (req, res) => {
    ///Get Data from MOVIE API
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(d => {
        const results = d.data.results
        res.send(results)
    })
    .catch(err => {
        console.log('ERR:', err);
    })
})

router.post('/search', (req, res) => {
    const query = encodeURI(req.body.title)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    ///Get Data from MOVIE API
    axios.get(url)
    .then( d => {
        const results = d.data.results
        res.send(results)
    })
    .catch(err => {
        console.log('ERR:', err);
    })
})

router.get('/movie/:id', (req, res) =>{
    const id = Number(req.params.id)
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

    ///Get Data from MOVIE API
    axios.get(url)
    .then( d => {
        const result = d.data
        console.log(result);
        res.send(result)
    })
    .catch(err => {
        console.log('ERR:', err);
    })
})

module.exports = router
