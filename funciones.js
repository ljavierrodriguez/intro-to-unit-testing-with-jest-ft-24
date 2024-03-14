function sumar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        throw new Error('Los argumentos deben ser numericos')
    }
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b){
    return a * b
}

module.exports = { sumar, restar, multiplicar }