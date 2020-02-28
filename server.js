const express = require('express');
const nunjucks = require('nunjucks')
const receitas = require('./data')
// const receita = require('./data')

const server = express()
server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
    express:server,
    autoescape: false,
    noCahe: true
})

//rota
server.get("/",function(req, res){
    return res.render('index', { receitas})
})

//rota
server.get("/about", function (req, res) {
    return res.render('about')
})

//rota
server.get("/receitas", function (req, res) {
    return res.render('receitas', { receitas })
})

//rota
server.get('/receita/:index',function(req, res){
    const recitaIndex = req.params.index;
    return res.render('receita', { receita: receitas[recitaIndex] })//->  id="{{loop.index -1}}">
})

//servidor
server.listen(2000, function(){
    console.log('Server is running')
})