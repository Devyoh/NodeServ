const express = require('express')
const path = require('path')

require('dotenv').config()


const PORT = process.env.PORT || 7000

const app = express()

//Use API
app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/youtube', (_ , res) => {
    res.send({
        msg: 'Bonjour les gens'
    })
})

app.get('/*', (_ , res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})