"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _querieExe = require('../../config/querieExe'); var _querieExe2 = _interopRequireDefault(_querieExe);


class BooksBusiness {
    static toListAll() {
        const sql = "SELECT * FROM TB_BOOKS";
        return _querieExe2.default.call(void 0, sql);
    } 

    static toListComics() {
        const sql = "SELECT * FROM TB_BOOKS WHERE TYPE  = 'HQ'";
        return _querieExe2.default.call(void 0, sql);
    } 

    static toListBooks() {
        const sql = "SELECT * FROM TB_BOOKS WHERE TYPE  = 'LIVRO'";
        return _querieExe2.default.call(void 0, sql);
    } 


    static toListByAuthor(id) {
        const sql = "SELECT * FROM TB_BOOKS WHERE IDAUTHOR = ?";
        return _querieExe2.default.call(void 0, sql, id);
    }  
    
    static toListByIllustrator(id) {
        const sql = "SELECT * FROM TB_BOOKS WHERE IDILLUSTRATOR = ?";
        return _querieExe2.default.call(void 0, sql, id);
    }   
    
    static toAdd(book) {
        const sql = "INSERT INTO TB_BOOKS SET ?";
        return _querieExe2.default.call(void 0, sql, book);
    }

    static toSearchById(id) {
        const sql =  `
            SELECT
                TB_BOOKS.*,
                TB_AUTHORS.NAME AS AuthorName,
                TB_ILLUSTRATORS.NAME AS IllustratorName
            FROM
                TB_BOOKS
            LEFT JOIN TB_AUTHORS ON
                TB_AUTHORS.IDAUTHOR = TB_BOOKS.IDAUTHOR
            LEFT JOIN TB_ILLUSTRATORS ON
                TB_ILLUSTRATORS.IDILLUSTRATOR = TB_BOOKS.IDILLUSTRATOR
            WHERE
                TB_BOOKS.IDBOOK = ?`;

        return _querieExe2.default.call(void 0, sql, id);
    }

    static toUpdate(book, id) {
        const sql = "UPDATE TB_BOOKS SET ? WHERE IDBOOK = ?"
        return _querieExe2.default.call(void 0, sql, [book, id]);
    }

    static toDelete(id) {
        const sql = "DELETE FROM TB_BOOKS WHERE IDBOOK = ?"
        return _querieExe2.default.call(void 0, sql, id);
    }
}

exports.BooksBusiness = BooksBusiness;