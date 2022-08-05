export interface Iuser {
    id: string;
    nombre: string;
    loading?: boolean;
    error?: string;
    token: string;
    password: string;
    username: string
}

/* export class User implements Iuser {
    constructor (public id: string, public nombre: string){}
} */