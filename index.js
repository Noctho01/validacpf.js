const Valida = require('./valida');
const valida = new Valida();

const leitor = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

leitor.question("INFORME SEU CPF: ", cpf => {
    console.clear();
    resultado = valida.validar(cpf);
    console.log(resultado ? "CPF É VALIDO" : "CPF NÃO É VALIDO")

    leitor.close();
});
