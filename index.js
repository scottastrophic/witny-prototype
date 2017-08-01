const express = require('express')
const path = require('path')
const app = express()
const port = 1234

// import Home from './templates/home.html'

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

app.use('/styles', express.static('styles'))

app.use('/images', express.static('images'))

app.get('/', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/home.html'))
))

app.get('/profile', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/profile.html'))
))


app.get('/rateclasses', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/account/rate-classes.html'))
))


app.get('/user-profile', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/account/User Profile.html'))
))

app.get('/spotlight', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/spotlight.html'))
))

