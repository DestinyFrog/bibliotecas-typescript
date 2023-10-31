import { Response, Request, Router } from "express"
import { readFileSync } from "fs"
import { join } from "path"
import type { Livro } from "../types"

const router = Router()

function get_data(): Livro[] {
	const text = readFileSync(
		join(__dirname,"..","..","data","livros.json"),
		{"encoding":"utf-8","flag":"r"} )
	return JSON.parse(text)
}

router.get( "/todos_livros", ( _req:Request, res:Response ) => {
	const data = get_data()
	res.render( "livros", {
		livros: data
	})
} )

router.get( "/procura_livros/:padrao", ( req:Request, res:Response ) => {
	const i_padrao = req.params.padrao.toLowerCase()
	const data = get_data().filter(obj =>
		obj.titulo.toLowerCase().includes( i_padrao ) ||
		obj.autor.toLowerCase().includes( i_padrao ) )

	res.render( "livros", { ["livros"]: data })
} )

router.get( "/uni_livro/:id", ( req:Request, res:Response ) => {
	const i_id = parseInt(req.params.id)
	const data = get_data().filter(obj =>
		obj.id === i_id)[0]

	res.render( "uni_livro", {
		livro: data,
		titulo: `Livro - ${data.titulo}`
	})
} )

export const router_livros = router