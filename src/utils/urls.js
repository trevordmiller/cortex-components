const {address} = require('ip')

exports.apiUrl = `${address()}:5000`
