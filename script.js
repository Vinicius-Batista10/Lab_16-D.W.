let operacaoAtual = '';
let operador = '';
let resultado = 0;

function digito(numero) {
    operacaoAtual += numero;
    updTela(operacaoAtual);
}

function operacao(operacao) {
    if (operacaoAtual !== '') {
        operador = operacao;
        operacaoAtual += operacao;
        updTela(operacaoAtual);
    }
}

function calculo() {
    try {
        resultado = eval(operacaoAtual);
        updTela(resultado);
        operacaoAtual = resultado.toString();
    } catch (e) {
        updTela('erro');
        operacaoAtual = '';
    }
}

function limpar() {
    operacaoAtual = '';
    operador = '';
    resultado = 0;
    updTela(0);
}

function updTela(valor) {
    document.getElementById('resultado').innerHTML = valor;
}