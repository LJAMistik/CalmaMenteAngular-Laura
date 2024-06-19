type Information = {
    tittle:string,
    description:string
}

type ReferenceSchema = {
    link: string,
    description: boolean
}

type AdressSchema = {
    zipCode: string,
    description: boolean
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    number: number,
    complement: string
}

// type ProfessionalResponse = {
//     name: string,
//     crp: string,
//     cpf: string,
//     contact: string
// }

// export type UserType = ProfessionalResponse & {
//     name:string,
//     email:string,
//     password:string,
//     birthday:string,
//     isAdmii:boolean,
// }

export type ArticleType = ReferenceSchema & {
    title:string,
    description:string,
    article:string,
    references:string,
    author:string
}

export type ClinicType = AdressSchema & {
    name:string,
    email:string,
    phone:string,
    rating:number
}

export type DisorderType = {
    nome:string,
    description:string,
    color:string,
    icon:string
}  

export interface UserType {
    cpf: string;
    name: string;
    email: string;
    password: string;
    birthday: string;
    crp: string;
    contact: string;
  }
  
  export interface DisorderResponse {
    name: string;
    description: string;
    color: string;
    icon: string;
  }

  export interface Article {
    title: string;
  }
  