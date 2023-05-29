const express = require('express')
const path = require('path')

//permet l'utilisation de ".env" avec des variables d'environnement.
require('dotenv').config()

//Définit un port de base OU 7000 s'il n'est pas reconnu.
const PORT = process.env.PORT || 7000

const app = express()

//Utilisation de l'API
app.use(express.json())

app.use(express.static('client/build'))

//Récupération d'une API factice.
app.get('/api/youtube', (_ , res) => {
    res.send({
        msg: 'Bonjour les gens'
    })
})

//permet l'affichage de toutes les pages retournées. **__dirname** = racine dynamique.
app.get('/*', (_ , res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//Message de confirmation du port utilisé lors du lancement du serveur.
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})