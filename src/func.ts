
// archivo usado para probar algunos ejemplos de testing
// estas funciones se usaron para ejemplificar construcciones
// testing en el archivo fun.spec.ts


export interface IAuthData {
    usernameToLower: string;
    usernameCharacters: string[];
    userDetails: Object | undefined;
    isAuthenticated: boolean;
}



export function suma(a: number, b: number): number {
    return a + b;
}


export function authentication(username: string, password: string): IAuthData {

    const authStatus = username === 'deveLOPER' && password === 'dev';

    return {
        usernameToLower: username.toLowerCase(),
        usernameCharacters: username.split(''),
        userDetails: {},
        isAuthenticated: authStatus
    }
}




export class  UsernameToLowercase {

    public toLower(username: string){
        if (username === '') {
            throw new Error('Invalid username, sorry!')
        }
        return username.toLowerCase();
    }

}