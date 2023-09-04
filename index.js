const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');

app.use(express.static('public'))

app.set('view engine','ejs')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true} )

app.listen(4000, ()=>{
  console.log('App listening on port 4000')
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/post', (req,res) => {
  res.render('post');
})

app.get('/contact', (req,res) => {
  res.render('contact');
})

