import queryExe from "../../config/querieExe";
import { AddBookDTO } from "./dtos/addBookDTO";

class BooksBusiness {
    static toListAll() {
        const sql = "SELECT * FROM TB_BOOKS";
        return queryExe(sql);
    } 

    static toListComics() {
        const sql = "SELECT * FROM TB_BOOKS WHERE TYPE  = 'HQ'";
        return queryExe(sql);
    } 

    static toListBooks() {
        const sql = "SELECT * FROM TB_BOOKS WHERE TYPE  = 'LIVRO'";
        return queryExe(sql);
    } 


    static toListByAuthor(id: number) {
        const sql = "SELECT * FROM TB_BOOKS WHERE IDAUTHOR = ?";
        return queryExe(sql, id);
    }  
    
    static toListByIllustrator(id: number) {
        const sql = "SELECT * FROM TB_BOOKS WHERE IDILLUSTRATOR = ?";
        return queryExe(sql, id);
    }   
    
    static toAdd(book: AddBookDTO) {
        const sql = "INSERT INTO TB_BOOKS SET ?";
        return queryExe(sql, book);
    }

    static toSearchById(id: number) {
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

        return queryExe(sql, id);
    }

    static toUpdate(book: AddBookDTO, id: number) {
        const sql = "UPDATE TB_BOOKS SET ? WHERE IDBOOK = ?"
        return queryExe(sql, [book, id]);
    }

    static toDelete(id: number) {
        const sql = "DELETE FROM TB_BOOKS WHERE IDBOOK = ?"
        return queryExe(sql, id);
    }
}

export  { BooksBusiness };