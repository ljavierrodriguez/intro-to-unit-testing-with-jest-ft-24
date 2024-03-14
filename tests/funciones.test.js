const { sumar, restar, multiplicar } = require('./../funciones');

describe('Validaciones de la funcion sumar', () => {

    test('La funcion sumar debe estar definida', () => {
        expect(sumar(10, 10)).toBeDefined()
    })

    test('La funcion sumar debe recibir 2 argumentos', () => {
        expect(sumar.length).toBe(2)
    })

    test('La suma de 5 + 7 debe retornar 12', () => {
        expect(sumar(5, 7)).toBe(12)
    })

    /* test('La funcion sumar debe recibir dos argumentos numericos', () => {
        let a = "5";
        let b = 7;
        const sumar = jest.fn();
        sumar(a, b);
    
        expect(sumar).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
    }) */
})

describe('Validaciones de la funcion restar', () => {

    test('La funcion restar debe estar definida', () => {
        expect(restar(10, 10)).toBeDefined()
    })

    test('La funcion restar debe recibir 2 argumentos', () => {
        expect(restar.length).toBe(2)
    })

    test('La resta de 5 - 7 debe retornar -2', () => {
        expect(restar(5, 7)).toBe(-2)
    })

    /* test('La funcion sumar debe recibir dos argumentos numericos', () => {
        let a = 5;
        let b = 7;
        
        sumar(a, b);
    
        expect(sumar).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
    }) */
})

describe('Validaciones de la funcion multiplicar', () => {
    test('La funciona multiplicar debe estar definina', () => {
        expect(multiplicar(10, 10)).toBeDefined()
    })
})