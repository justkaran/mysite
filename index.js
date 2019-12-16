const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
    res.render('index.html');
});
app.get('/home', function(req, res){
    res.render('index.html');
});
app.get('/books', function(req, res){
    res.render('books.html');
});
app.get('/quotes', function(req, res){
    res.render('quotes.html');
});
app.get('/email', function(req, res){
    res.render('email.html');
});
app.get('/bio', function(req, res){
    res.render('bio.html');
});
app.get('/blog', function(req, res){
    res.render('blog.html');
});
app.get('/drawings', function(req, res){
    res.render('drawings.html');
});


app.listen(3000, () => console.log('server started'));
