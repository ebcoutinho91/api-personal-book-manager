import cors from "cors";
import express  from "express";
import bodyParser from "body-parser";
import connection from "./config/dbConnect"
import { router } from "./routes";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true})); // Configuração para usar parâmetros na URL.
app.use(bodyParser.json());                       // Em qual modelo a informação vai trafegar. 
app.use(router);                   


const port: number = 3000;

connection.connect(err => {
    err?
    console.log(err):
    console.log("Connected to database successfully")
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));