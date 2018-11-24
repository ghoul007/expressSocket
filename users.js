var express = require('express');
var router = express.Router();


module.exports = function (socket) {
  // console.log("socket ", socket);
   router.get('/', function (req, res, next) {
    const a = Array(100).fill(1).map(res => 'ahmed' + Math.floor(Math.random() * 1000))
    socket.emit('comment.add', 'cava patron')
    console.log('socket io init')
    res.sendFile(__dirname + '/index.html');
    // res.send(a);
  });
return router;
};



// module.exports = router;
