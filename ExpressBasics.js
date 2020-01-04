// Importing express module
const express = require('express')
//Creating an express module object
const app = express()

// Creating Callback function and sending response
app.get('/', (req, res) => res.send(' A little test!!'))

// Establish the server connection
// Port Environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`))

/*Routing Methods
Routing is the process of determining a specific behavior of the application. It basically defines how an application should respond to a client request to a particular route, path or URI along with a particular HTTP Request method.

Each route can contain more than one handler functions, which will be executed when the specific route is browsed by the user. Below is the structure of Route definition:
*/

//app.METHOD(PATH, HANDLER)
// app is an instance of express where you can use any variable.
// METHOD is an HTTP request method such as get, set, put, delete
// PATH is the route to the server for a specific webpage
// HANDLER is the callback function that is executed when the matching route is found.

/*There are basically four main HTTP methods that can be supplied in the request which helps in specifying the operation requested by the user.  These methods are:
*/

/*
GET
The HTTP GET method helps in requesting for the representation of a specific resource by the client. The requests having GET just retrieves data and without causing any effect. Below is a small example of GET handler:*/
app.get('/', (req, res) => {
    res.send('Like earlier, this message will just display')
})

/*POST
The HTTP POST method helps in requesting the server to accept the data that is enclosed within the request as a new object of the resource as identified by the URI.*/
app.post('/api/books', (req, res)=> {
    //Method Body
});

/*PUT

The HTTP PUT method helps in requesting the server to accept the data that is enclosed within the request as an alteration to the existing object which is identified by the provided URI. In case the data doesn’t exist, PUT will create a new one with the provided information*/

app.put('/api/books/:id', (req, res) => {
    //method body
});

/* DELETE
The HTTP DELETE method helps in requesting the server to delete a specific resource from the destination.*/
app.delete('/api/books/id', (req, res) => {
    //method body
});

