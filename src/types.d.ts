
interface Image {
	url:string|null
	alt:string|null
}

export interface Livro {
	id:number
	titulo:string
	autor:string|null
	ano_de_publicacao:number|null
	imagem:Image
}
