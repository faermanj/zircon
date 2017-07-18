'use strict';
const pop = require('./pop');
const api = require('./api');

function print(err,data){
  if (err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
}

api.lookup({path:'/some/gist'},{},print);
pop.lookup({Records:[{
  cf:{
    request:{
      uri:'/some/gist'}
    }}]},
    {},
    print);
