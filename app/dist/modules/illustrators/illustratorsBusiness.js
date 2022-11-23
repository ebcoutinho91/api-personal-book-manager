"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _querieExe = require('../../config/querieExe'); var _querieExe2 = _interopRequireDefault(_querieExe);


class IllustratorsBusiness {
    static toList() {
        const sql = "SELECT * FROM TB_Illustrators";
        return _querieExe2.default.call(void 0, sql);
    }

    static toAdd(ilustrator) {

        const name = ilustrator.Name;
        const birthDate = ilustrator.BirthDate;
        const nationality = ilustrator.Nationality;
        const imageLink = ilustrator.ImageLink;

        const sql = `
            INSERT
                INTO
                TB_ILLUSTRATORS (
                NAME,
                BIRTHDATE,
                NATIONALITY,
                IMAGELINK
                )
            SELECT
                X.NAME,
                X.BIRTHDATE,
                X.NATIONALITY,
                X.IMAGELINK
            FROM
                (
                SELECT
                    ? NAME,
                    ? BIRTHDATE,
                    ? NATIONALITY,
                    ? IMAGELINK
                ) X
            WHERE
                NOT EXISTS(
                SELECT
                    1
                FROM
                    TB_ILLUSTRATORS  R
                WHERE
                    R.NAME = X.NAME
                    AND R.BIRTHDATE = X.BIRTHDATE
                    AND R.NATIONALITY = X.NATIONALITY
                    AND R.IMAGELINK = X.IMAGELINK)`;
        return _querieExe2.default.call(void 0, sql, [name, birthDate, nationality, imageLink]);
    }

    static toSearchById(id) {
        const sql = "SELECT * FROM TB_Illustrators WHERE IDILLUSTRATOR = ?";
        return _querieExe2.default.call(void 0, sql, id);
    } 

    static toUpdate(ilustrator, id) {
        const sql = "UPDATE TB_Illustrators SET ? WHERE IDILLUSTRATOR = ?";
        return _querieExe2.default.call(void 0, sql, [ilustrator, id])
    }

    static toDelete(id) {
        const sql = "DELETE FROM TB_Illustrators WHERE IDILLUSTRATOR  = ?";
        return _querieExe2.default.call(void 0, sql, id);
    }
}

exports.IllustratorsBusiness = IllustratorsBusiness;