function somar(a: number, b: number): number {
    return a + b
}

function subtrair(a: number, b: number): number {
    return a - b
}

function multiplicar(a: number, b: number): number {
    return a * b
}

function dividir(a: number, b: number): number {
    return a / b
}

(function (): void {

    console.log(`\n[ Operações básicas ]\n`)

    console.log(`(+) soma:`, somar(15, 8))

    console.log(`(-) subtração:`, subtrair(10, 5))

    console.log(`(*) multiplição`, multiplicar(9, 8))

    console.log(`(/) divisão`, dividir(145, 3))

    console.log()

})()