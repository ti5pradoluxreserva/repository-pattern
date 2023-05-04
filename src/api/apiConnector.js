const axios =require('axios')

const api = axios.create({
    baseURL: 'http://localhost:5555/'
})

module.exports = api