import { authentication, suma, UsernameToLowercase } from "../src/func";
import request from "supertest";
import { appIntance } from "./src_spec/setup";
import { Application } from "express";
import { App } from "../src/app";



describe('Suma basic test', () => {

    // ? test de suma
    test('Return 5 suma de 3 + 2', () => {

        const result = suma(3, 2);

        expect(result).toBe(5);
        expect(result).toEqual(5);
        expect(result).toBeLessThan(6);
        expect(result).toBeGreaterThan(4);
    });


    // pruebas con multiples valores. (for)
    it.each([
        [2, 3, 5,],
        [0, 7, 7,],
        [10, 4, 14,],
        [1, 5, 6,],
    ])('test should return the sum of %i and %i as %i', (a, b, expected) => {
        const actual = suma(a, b);
        expect(actual).toEqual(expected);
    })


    // ejemplos de diferentes tipos de test
    describe('Authentication test suit', () => {

        test('return the lower case of a valid user', () => {
            const result = authentication('deveLOPER', 'dev');
            expect(result.usernameToLower).toBe('developer');
        });


        test('return the username caracters of a valid user', () => {
            const result = authentication('deveLOPER', 'dev');
            expect(result.usernameCharacters).toEqual(
                expect.arrayContaining(['L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e']));
        });

        test('user details', () => {
            const result = authentication('deveLOPER', 'dev');
            expect(result.userDetails).toEqual({});
            expect(result.userDetails).toBeDefined();
            expect(result.userDetails).not.toBeUndefined();
            expect(result.userDetails).toBeTruthy();
            expect(result.userDetails).not.toBeFalsy();
        });

        test('return the username caracters of a valid user', () => {
            const result = authentication('deveLOPER', 'dev');
            expect(result.isAuthenticated).toBeTruthy();
            expect(result.isAuthenticated).not.toBeFalsy();
        });

    })


    // ejemplo de omitir un test  con  .skip
    describe.skip('Name of the group', () => {

        let sut: UsernameToLowercase

        beforeEach(() => {
            sut = new UsernameToLowercase();
        })

        afterEach(() => {

        })

        test('should return the lower case of a valid username', () => {
            const actual = sut.toLower('Bob');
            expect(actual).toBe('bob');
        });


        test('throws an error for an invalid username', () => {
            expect(() => sut.toLower('')).toThrow('Invalid username, sorry!');
        });

    });

})






// ejercicios de test
describe('test de practica', () => {


    //* obtenemos la instancia de la app
    let app: Application = appIntance.getApplication();
    //* usamos request, para crear la api
    let api = request(app);


    //* esto se ejecutara antes de todo
    beforeAll(() => {

    })

    //* esto se ejecutara despues de todo
    afterAll(async () => {
        await appIntance.closeServer();
    })


    //?  test de funcionamiento del servidor
    it('Return server test', async () => {
        const res = await api.get('/test');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ test: 'Ok' });
    })


    // ? test de comprovacion de instanncias.
    it('Should return an instance of App', () => {
        const actual = new Error();
        expect(actual).toBeInstanceOf(App);
        expect(actual).toBeTruthy();
    })

})