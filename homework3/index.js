const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const port = 3000

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'layouts', 'partials')
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/home'))
app.use('/about', require('./routes/about'))
app.use('/students',require('./routes/students'))
app.use('/groups', require('./routes/groups'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})