// DEPENDENCIES
const methodOverride = require('method-override')
const express = require('express')

//Config
require('dotenv').config()
const port = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about BREADS!')
})

//Breads
const breadsController = require('./Controllers/breads_controller')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req,res) => {
    res.send('404')
})

//listen
app.listen(port, () => {
    console.log(`Oпачки ${port}`)
})