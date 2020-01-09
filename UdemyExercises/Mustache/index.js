const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const PORT = 3000
const homeRoutes= require('./routes/index')
const userRoutes = require('./routes/users')
const path = require('path')
const mustacheExpress = require('mustache-express')

app.use(bodyParser.urlencoded({extended : true}));
app.user('/users', authenticate, userRoutes)


function authenticate(req, res, next) {

  if(req.session) {
      if(req.session.name) {
          next()
      } else {
          res.redirect('/users/add-user')
      }
  } else {
      res.redirect('/users/add-user')
  }
}


app.use(session({
  secret: 'secretstuffha',
  resave: false,
  saveUninitialized: true,
}))
// If directory name is current directory
const views_paths = path.join(__dirname, '/views')

app.use('/', homeRoutes)
app.use('/users', userRoutes)
//Setup engine to require mustache
// The first parameter is the template page (ours will be called mustache)
// Views is a fancy name for pages
app.use('/css', express.static("css"))
app.engine('mustache', mustacheExpress(views_paths+ '/partials', '.mustache'))
app.set('views', views_paths)
app.set('view engine', 'mustache')


// app.get('/add-user', (req, res) => {
//     res.render('add-user')
// })

// app.get('/users', (req, res) => {
//     let users = 
//     [
//         {name: "John Doe", age:34},
//         {name: "Mary ho", age: 32},
//         {name: "Lisa Po", age: 20}
//     ]
//     res.render('users', {users: users})
// })

// app.get('/', (req,res) => {
//     // Renders a page
//     let user = {
//             name: "John Doe", 
//                 address: {
//                     street: "1200 Richmond",
//                     city: "Houston",
//                     state: "Texas"
//                 }
//                 }

//     res.render('index', user)
// })




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    });