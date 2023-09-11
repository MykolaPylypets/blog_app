const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')
const validateMiddleware = require("./middleware/validationMiddleware")
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newPostController = require('./controllers/newPost')
const express = require('express')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use('/posts/store',validateMiddleware)

app.set('view engine','ejs')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true} )

app.listen(4000, ()=>{
  console.log('App listening on port 4000')
})


app.get('/',homeController)

app.get('/post/:id',getPostController)

app.get('/posts/new', newPostController)

app.post('/posts/store', storePostController)

app.get('/auth/register', newUserController)

app.post('/users/register', storeUserController)
