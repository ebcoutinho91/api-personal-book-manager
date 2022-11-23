"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _querieExe = require('../../config/querieExe'); var _querieExe2 = _interopRequireDefault(_querieExe);


class GenreBusiness {

    static toAdd(genre) {
        const sql = "INSERT INTO TB_GENRES SET ?";
        return _querieExe2.default.call(void 0, sql, genre);
    }

    static toListAll() {
        const sql = "SELECT * FROM TB_GENRES";
        return _querieExe2.default.call(void 0, sql);
    }

    static toSearchById(id) {
        const sql = `SELECT * FROM TB_GENRES WHERE IDGENRE = ?`;

        return _querieExe2.default.call(void 0, sql, id);
    }

    static toUpdate(genre, id) {
        const sql = "UPDATE TB_GENRES SET ? WHERE IDGENRE = ?"
        return _querieExe2.default.call(void 0, sql, [genre, id]);
    }

    static toDelete(id) {
        const sql = "DELETE FROM TB_GENRES WHERE IDGENRE = ?"
        return _querieExe2.default.call(void 0, sql, id);
    }

}

exports.GenreBusiness = GenreBusiness;
