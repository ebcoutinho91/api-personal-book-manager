import connection from "./dbConnect";

const queryExe = (query, params: any = "") => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            err? reject(err) : resolve(result);
        })
    })
}

export default queryExe;