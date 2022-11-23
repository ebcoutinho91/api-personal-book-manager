import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Kaizokuouniorewanaru?!2022",
    database: "personalbookmanager",
});

export default connection;