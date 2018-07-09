var User = require('../models/User');

exports.save = function(nome, sobrenome, email, callback) {
    new User({
        'nome': nome,
        'sobrenome': sobrenome,
        'email': email
    }).save(function(error, user) {
        if(error) {
            callback({error: 'Não foi possivel salvar'});
        } else {
            callback(user);
        }
    });
}

exports.list = function(callback) {
    User.find({}, function(error, users) {
        if (error) {
            callback({error: 'Não foi possivel encontrar os usuarios'});
        } else {
            callback(users);
        }
    });
}

exports.delete = function(id, callback) {
    User.findById(id, function(error, user) {
        if (error) {
            callback ({error: 'Não foi possivel excluir'});
        } else {
            user.remove (function(error) {
                if(!error) {
                    callback ({resposta: "Usuário excluido com sucesso"});
                }
            });
        }
    });
}