"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dbConnect = require('./dbConnect'); var _dbConnect2 = _interopRequireDefault(_dbConnect);

const queryExe = (query, params = "") => {
    return new Promise((resolve, reject) => {
        _dbConnect2.default.query(query, params, (err, result) => {
            err? reject(err) : resolve(result);
        })
    })
}

exports. default = queryExe;