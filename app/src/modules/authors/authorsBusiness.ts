import queryExe from "../../config/querieExe";
import { AddAuthorDTO } from "./dtos/addAuthorDTO";

class AuthorsBusiness {
    static toList() {
        const sql = "SELECT * FROM TB_AUTHORS";
        return queryExe(sql);
    }

    static toAdd(author: AddAuthorDTO) {

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

        return queryExe(sql, [name, birthDate, nationality, imageLink]);
    }

    static toSearchById(id: number) {
        const sql = "SELECT * FROM TB_AUTHORS WHERE IDAUTHOR = ?";
        return queryExe(sql, id);
    } 

    static toUpdate(author: AddAuthorDTO, id:number) {
        const sql = "UPDATE TB_AUTHORS SET ? WHERE IDAUTHOR = ?";
        return queryExe(sql, [author, id])
    }

    static toDelete(id: number) {
        const sql = "DELETE FROM TB_AUTHORS WHERE IDAUTHOR  = ?";
        return queryExe(sql, id);
    }
}

export { AuthorsBusiness };