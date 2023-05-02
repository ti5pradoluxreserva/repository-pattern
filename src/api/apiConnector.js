const axios =require('axios')

const api = axios.create({
    baseURL: 'http://localhost:5030/'
})

module.exports = api