const fs = require('fs');
const express = require('express');
const Mustache  = require('mustache');

const app = express();

function loadLogin() {
  return fs.readFileSync('dist/login.html').toString();
}

function loadCallback(){
  return fs.readFileSync('dist/callback.html').toString();
}

app.get('/', function(request, response){
  var view = {};
  var html = Mustache.to_html(loadLogin(), view);
  response.send(html);
});

app.get('/callback', function(request, response){
  var view = {};
  var html = Mustache.to_html(loadCallback(), view);
  response.send(html);
})

app.listen(3000);