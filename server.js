const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Start server
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

module.exports = app;