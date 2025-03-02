import { IOperacao } from './interfaces'

function calculadora(): IOperacao {

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

    return {
        somar,
        subtrair,
        multiplicar,
        dividir
    }
}

(function (fnCalc: CallableFunction) {

    const calc: IOperacao = fnCalc()

    console.log(`\n[ Operações básicas ]\n`)

    console.log(`(+) soma:`.padEnd(16, '.'), calc.somar(15, 8))

    console.log(`(-) subtração:`.padEnd(16, '.'), calc.subtrair(10, 5))

    console.log(`(*) multiplição:`.padEnd(16, '.'), calc.multiplicar(9, 8))

    console.log(`(/) divisão:`.padEnd(16, '.'), calc.dividir(145, 3))

    console.log()

})(calculadora)