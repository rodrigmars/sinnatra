import { IOperacao } from './interfaces'

((calc: IOperacao) => {

    console.log(`\n[ Operações básicas ]\n`)

    // console log aplicando string interpolation ( interpolação de strings )
    console.log(`(+) soma:${''.padEnd(7, '.')} ${calc.somar(15, 8)}`)

    console.log(`(-) subtração:${''.padEnd(2, '.')} ${calc.subtrair(10, 5)}`)

    console.log(`(*) multiplição: ${calc.multiplicar(9, 8)}`)

    console.log(`(/) divisão:${''.padEnd(4, '.')} ${calc.dividir(145, 3)}`)

    console.log()

})({
    somar: (a: number, b: number) => a + b,
    subtrair: (a: number, b: number) => a - b,
    multiplicar: (a: number, b: number) => a * b,
    dividir: (a: number, b: number) => a / b
})