var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true })

module.exports = mongoose