"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _querieExe = require('../../config/querieExe'); var _querieExe2 = _interopRequireDefault(_querieExe);


class AuthorsBusiness {
    static toList() {
        const sql = "SELECT * FROM TB_AUTHORS";
        return _querieExe2.default.call(void 0, sql);
    }

    static toAdd(author) {

        const name = author.Name;
        const birthDate = author.BirthDate;
        const nationality = author.Nationality;
        const imageLink = author.ImageLink;

        const sql = `
            INSERT
                INTO
                TB_AUTHORS(
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
                    TB_AUTHORS R
                WHERE
                    R.NAME = X.NAME
                    AND R.BIRTHDATE = X.BIRTHDATE
                    AND R.NATIONALITY = X.NATIONALITY
                    AND R.IMAGELINK = X.IMAGELINK)`;

        return _querieExe2.default.call(void 0, sql, [name, birthDate, nationality, imageLink]);
    }

    static toSearchById(id) {
        const sql = "SELECT * FROM TB_AUTHORS WHERE IDAUTHOR = ?";
        return _querieExe2.default.call(void 0, sql, id);
    } 

    static toUpdate(author, id) {
        const sql = "UPDATE TB_AUTHORS SET ? WHERE IDAUTHOR = ?";
        return _querieExe2.default.call(void 0, sql, [author, id])
    }

    static toDelete(id) {
        const sql = "DELETE FROM TB_AUTHORS WHERE IDAUTHOR  = ?";
        return _querieExe2.default.call(void 0, sql, id);
    }
}

exports.AuthorsBusiness = AuthorsBusiness;