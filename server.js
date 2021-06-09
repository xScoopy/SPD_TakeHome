const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
require('dotenv').config()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

require('./controllers/index.js')(app);
require('./controllers/result.js')(app);
//Start server
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

module.exports = app;