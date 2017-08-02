const express = require('express')
const path = require('path')
const swig = require('swig')
const app = express()
const port = 1234

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

// Swig Setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

// Serving up static assets
app.use('/styles', express.static('styles'))
app.use('/images', express.static('images'))
app.use('/material-components-web', express.static('node_modules/material-components-web'))

// Routes
app.get('/', (req, res) => (
  res.sendFile(path.join(__dirname + '/templates/home.html'))
))

app.get('/profile', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/profile.html'))
))

app.get('/rate-classes', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/account/rate-classes.html'))
))

app.get('/spotlight', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/spotlight.html'))
))

app.get('/class-history', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/account/class-history.html'))
))

// Swig test
app.get('/home', (req, res) => (
  res.render('home', {})
))

app.get('/test', (req, res) => (
  res.render('test', {})
))

app.get('/schedule', (req, res) => (
  res.render('schedule', {})
))

app.get('/average-class-rating', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/account/average-class-rating.html'))
   ))


app.get('/profile-swig', (req, res) => (
  res.render('profile', {})
))
app.get('/rate-classes-swig', (req, res) => (
  res.render('rate-classes', {})
))
