var express = require('express');
var router = express.Router();
module.exports = function (socket) {
 console.log("socket ", socket);
 return   router.get('/', function (req, res, next) {
    
        socket.emit('comment.add', 'cava patron')
        console.log('socket io init')
  
    res.render('index', { title: 'Express' });
  });

};
