type Information = {
    id: number,
    titulo:string,
    descricao:string
}

export type DisorderResponse = Information & {
    artigos: {
        id: number,
        titulo:string,
        descricao:string,
        conteudo:string,
        tema:string
        }[]
}

export type UserType = {
    id?:number,
    nome:string,
    dataNascimento:string,
    cpf:string,
    senha:string,
    email:string,
    crp?:string
}