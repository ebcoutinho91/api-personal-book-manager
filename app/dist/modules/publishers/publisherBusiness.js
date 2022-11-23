"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _querieExe = require('../../config/querieExe'); var _querieExe2 = _interopRequireDefault(_querieExe);


class PublisherBusiness {

    static toAdd(publisher) {
        const sql = "INSERT INTO TB_PUBLISHERS SET ?";
        return _querieExe2.default.call(void 0, sql, publisher);
    }

    static toListAll() {
        const sql = "SELECT * FROM TB_PUBLISHERS";
        return _querieExe2.default.call(void 0, sql);
    }

    static toSearchById(id) {
        const sql = `SELECT * FROM TB_PUBLISHERS WHERE IdPublisher = ?`;

        return _querieExe2.default.call(void 0, sql, id);
    }

    static toUpdate(publisher, id) {
        const sql = "UPDATE TB_PUBLISHERS SET ? WHERE IdPublisher = ?"
        return _querieExe2.default.call(void 0, sql, [publisher, id]);
    }

    static toDelete(id) {
        const sql = "DELETE FROM TB_PUBLISHERS WHERE IdPublisher = ?"
        return _querieExe2.default.call(void 0, sql, id);
    }
}

exports.PublisherBusiness = PublisherBusiness;
