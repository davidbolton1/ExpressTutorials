const express = require('express')
const router = express.Router()

// Make sure to pass in next, this is middleware for authentication
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

//localhost:3000/users
router.get('/', (req,res) => {
    // Renders a page
    let user = {
            // name: "John Doe", 
            name: req.session.name,
            age: req.session.age,
                address: {
                    street: "1200 Richmond",
                    city: "Houston",
                    state: "Texas"
                }
                }

    res.render('index', user)
});

router.get('/add-user', (req, res) => {
    res.render('add-user')
});

router.get('/bank-accounts', authenticate, (req,res) => {
    res.send('Bank Accounts')
})

router.post('/add-user', (req, res) => {
    // let user ={
        let name= req.body.name
        let age= req.body.age
    // }
    // console.log(user) 
    if (req.session) {
        req.session.name = name
        req.session.age = age
    }
    console.log(name)
    console.log(age)
    // req.session.user = { name: name, age: age }

    res.status(200).send()
    res.redirect('/users')
})

router.get('/view-all-users', (req, res) => {
    let users = 
    [
        {name: "John Doe", age:34},
        {name: "Mary ho", age: 32},
        {name: "Lisa Po", age: 20}
    ]
    res.render('users', {users: users})
})

module.exports = router