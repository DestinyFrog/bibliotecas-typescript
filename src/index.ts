import express from "express"
import dotenv from "dotenv"
import { join } from "path"
import { router_livros } from "./routes/livros"

dotenv.config()
const PORT = parseInt( process.env.PORT || "3000" )
const HOST = process.env.HOST || "127.0.0.1"

const app = express()

app.set("view engine", "ejs")
app.set("views",  join(__dirname,"..","views") )

app.use( "/", express.static( join(__dirname,"..","public") ) )
app.use( "/", router_livros )

app.listen( PORT, HOST,
	() => console.log(`Listening on http://${HOST}:${PORT}`) )