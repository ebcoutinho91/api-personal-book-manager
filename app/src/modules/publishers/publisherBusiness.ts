import queryExe from "../../config/querieExe";
import { AddPublisherDTO } from "./dtos/addPublisherDTO";

class PublisherBusiness {

    static toAdd(publisher: AddPublisherDTO) {
        const sql = "INSERT INTO TB_PUBLISHERS SET ?";
        return queryExe(sql, publisher);
    }

    static toListAll() {
        const sql = "SELECT * FROM TB_PUBLISHERS";
        return queryExe(sql);
    }

    static toSearchById(id: number) {
        const sql = `SELECT * FROM TB_PUBLISHERS WHERE IdPublisher = ?`;

        return queryExe(sql, id);
    }

    static toUpdate(publisher: AddPublisherDTO, id: number) {
        const sql = "UPDATE TB_PUBLISHERS SET ? WHERE IdPublisher = ?"
        return queryExe(sql, [publisher, id]);
    }

    static toDelete(id: number) {
        const sql = "DELETE FROM TB_PUBLISHERS WHERE IdPublisher = ?"
        return queryExe(sql, id);
    }
}

export { PublisherBusiness };
