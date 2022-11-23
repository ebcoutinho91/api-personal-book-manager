"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _dbConnect = require('./config/dbConnect'); var _dbConnect2 = _interopRequireDefault(_dbConnect);
var _routes = require('./routes');

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, ));

app.use(_bodyparser2.default.urlencoded({extended: true})); // Configuração para usar parâmetros na URL.
app.use(_bodyparser2.default.json());                       // Em qual modelo a informação vai trafegar. 
app.use(_routes.router);                   


const port = 3000;

_dbConnect2.default.connect(err => {
    err?
    console.log(err):
    console.log("Connected to database successfully")
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));