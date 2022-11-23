import queryExe from "../../config/querieExe";
import { AddIllustratorDTO } from "./dtos/addIllustratorDTO";

class IllustratorsBusiness {
    static toList() {
        const sql = "SELECT * FROM TB_Illustrators";
        return queryExe(sql);
    }

    static toAdd(ilustrator: AddIllustratorDTO) {

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
        return queryExe(sql, [name, birthDate, nationality, imageLink]);
    }

    static toSearchById(id: number) {
        const sql = "SELECT * FROM TB_Illustrators WHERE IDILLUSTRATOR = ?";
        return queryExe(sql, id);
    } 

    static toUpdate(ilustrator: AddIllustratorDTO, id:number) {
        const sql = "UPDATE TB_Illustrators SET ? WHERE IDILLUSTRATOR = ?";
        return queryExe(sql, [ilustrator, id])
    }

    static toDelete(id: number) {
        const sql = "DELETE FROM TB_Illustrators WHERE IDILLUSTRATOR  = ?";
        return queryExe(sql, id);
    }
}

export { IllustratorsBusiness };