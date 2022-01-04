// require('dotenv').config()
// const express = require('express')
// const methodOverride = require('method-override')
// const app = express()

// // Express Settings
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))

// // Controllers & Routes
// app.use('/posts', require('./controllers/posts_controller'))

// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('*', (req, res) => {
//     res.render('404')
// })

// // Listen for Connections
// app.listen(process.env.PORT)

// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// CONTROLLERS
app.use('/posts', require('./controllers/posts_controller'))

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})