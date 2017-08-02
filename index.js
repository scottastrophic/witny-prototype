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

// Swig test
app.get('/', (req, res) => (
  res.render('home', {})
))

// app.get('/test', (req, res) => (
//   res.render('test', {})
// ))

app.get('/schedule', (req, res) => (
  res.render('schedule', {})
))

app.get('/average-class-rating', (req, res) => (
  res.sendFile(path.join(__dirname + '/templates/account/average-class-rating.html'))
))

app.get('/profile', (req, res) => (
  res.render('profile', {})
))

app.get('/rate-classes', (req, res) => (
  res.render('rate-classes', {})
))

app.get('/class-history', (req, res) => (
  res.render('class-history', {})
))

app.get('/spotlight', (req, res) => (
   res.render('spotlight', {})
))

app.get('/scan', (req, res) => (
   res.sendFile(path.join(__dirname + '/templates/scan.html'))
))
