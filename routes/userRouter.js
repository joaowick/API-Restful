var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', function(req, res) {
    userController.list(function(resp) {
        res.json(resp);
    });
});

router.post('/cadastro', function(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;

    userController.save(nome, sobrenome, email, function(resp) {
        res.json(resp);
    });
});

router.delete('/deletar/:id', function(req, res) {
    var id = req.params.id;

    userController.delete(id, function(resp) {
        res.json(resp);
    });
});

module.exports = router;