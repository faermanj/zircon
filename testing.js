'use strict';
const zircon = require('./handler');

function debug(err,data){
  if (err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
}

zircon.lookup({path:'/some/thing'},{},debug);
zircon.lookup({path:'/some/gist'},{},debug);
zircon.lookup({path:'/some/aws-tue'},{},debug);
