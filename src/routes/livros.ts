import { Response, Request, Router } from "express"
import { readFileSync } from "fs"
import { join } from "path"

const router = Router()

const text = readFileSync(
	join(__dirname,"..","..","data","livros.json"),
	{"encoding":"utf-8","flag":"r"} )
const data:object[] = JSON.parse(text)

router.get( "/", ( req:Request, res:Response ) => {
	res.render( "livros", { livros: data } )
} )

router.get( "/uni_livro/:id", ( req:Request, res:Response ) => {
	const id = parseInt( req.params.id )
	const real_data = data[id-1]
	res.render( "uni_livro", { livro: real_data } )
} )

export const router_livros = router