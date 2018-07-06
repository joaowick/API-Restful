var mongoose = require('mongoose');

var urlString = 'mongodb://admin:admin1234@ds159110.mlab.com:59110/joaowick-mjv';

mongoose.connect(urlString, function(err, res){
    if(err) {
        console.log('Não foi possivel conectar a: ' + urlString);
    }
    else {
        console.log('Conectado a: ' + urlString);
    }
})