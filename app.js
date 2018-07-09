var app = require('./config/app_config');
var db = require('./config/db_config');
var User = require('./models/User');
var userController = require('./controllers/userController');
var users = require('./routes/userRouter');

app.get('/', function(req, res){
    res.end('Bem vindo a API de Usuarios');
});

//rotas de produtos
app.use('/users', users);