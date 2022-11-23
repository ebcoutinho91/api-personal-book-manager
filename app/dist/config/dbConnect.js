"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mysql2 = require('mysql2'); var _mysql22 = _interopRequireDefault(_mysql2);

const connection = _mysql22.default.createConnection({
    host: "localhost",
    user: "root",
    password: "Kaizokuouniorewanaru?!2022",
    database: "personalbookmanager",
});

exports. default = connection;