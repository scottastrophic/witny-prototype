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

// Routes
app.get('/', (req, res, next) => (
  res.sendFile(path.join(__dirname + '/templates/home.html'))
  next()
))

app.get('/profile', (req, res, next) => (
   res.sendFile(path.join(__dirname + '/templates/profile.html'))
   next()
))

app.get('/rateclasses', (req, res, next) => (
   res.sendFile(path.join(__dirname + '/templates/account/rate-classes.html'))
   next()
))

app.get('/user-profile', (req, res, next) => (
   res.sendFile(path.join(__dirname + '/templates/account/User Profile.html'))
   next()
))

app.get('/spotlight', (req, res, next) => (
   res.sendFile(path.join(__dirname + '/templates/spotlight.html'))
   next()
))

// Swig test
app.get('/test', (req, res, next) => (
  res.render('test', {})
  next()
))

// Error Handling
app.use(err, req, res, next) => (
  console.error('Express Error')
  res.send(err)
)
