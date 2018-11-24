var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Comment = require('./models/comment');


// New comments
// var comments = [{
//     user: 'Batman',
//     comment: 'Great post!'
// }, {
//     user: 'Robin',
//     comment: 'Interesting ideas...'
// }, {
//     user: 'Joker',
//     comment: 'Thanks, Batman!'
// }, {
//     user: 'Bruce Wayne',
//     comment: 'I agree with Batman'
// }];
// // Loop over new comments and create them
// for (var i = 0; i < comments.length; i++) {
//     new Comment(comments[i]).save(function (err) {
//         if(err){
//             console.log(err);
//         }
//         console.log("comment created successful");
//     });
//     console.log("comments[i] ", comments[i]);
// }
// var usersRouter = require('./routes/users');

var socketIO = require('socket.io')
io = socketIO();
var app = express();
app.io = io;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));
io.on('connection', function (socket) {
    var stream  = Comment.find(
        function(err, data){
            socket.emit('comment.add', data)
        }
    ) 
})
module.exports = app;
