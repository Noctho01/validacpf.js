// instanciando 'Valida' (responsavel por validar cpf)
const Valida = require('./valida');
const valida = new Valida();

// modulo de leitura de input para receber o cpf do usuario
const leitor = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

// Lendo input no terminal (recebendo cpf)
leitor.question("INFORME SEU CPF: ", cpf => {
    console.clear();
    resultado = valida.validar(cpf);
    console.log(resultado ? "CPF É VALIDO" : "CPF NÃO É VALIDO")

    leitor.close();
});
