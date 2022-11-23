import queryExe from "../../config/querieExe";
import { AddGenreDTO } from "./dtos/addGenreDTO";

class GenreBusiness {

    static toAdd(genre: AddGenreDTO) {
        const sql = "INSERT INTO TB_GENRES SET ?";
        return queryExe(sql, genre);
    }

    static toListAll() {
        const sql = "SELECT * FROM TB_GENRES";
        return queryExe(sql);
    }

    static toSearchById(id: number) {
        const sql = `SELECT * FROM TB_GENRES WHERE IDGENRE = ?`;

        return queryExe(sql, id);
    }

    static toUpdate(genre: AddGenreDTO, id: number) {
        const sql = "UPDATE TB_GENRES SET ? WHERE IDGENRE = ?"
        return queryExe(sql, [genre, id]);
    }

    static toDelete(id: number) {
        const sql = "DELETE FROM TB_GENRES WHERE IDGENRE = ?"
        return queryExe(sql, id);
    }

}

export { GenreBusiness };
