class ValidaCpf {

    // valida os digitos do cpf
    // 'numChave' guarda o numero chave (10 para validar o primeiro digito e 11 para validar o segundo digito)
    _validarDigitos (cpf, numChave) {
        const digito = parseInt(cpf[numChave - 1]);
        const noveDigitos = cpf.slice(0, numChave);
        let primeiroResult = 0;
        let segundoResult = 0;
        
        // varrendo o cpf para multiplicar cada valor ao numero numChave - num (num = numero de 10 ou 11 a 2)
        // 'referencia' guarda o numero a qual o valor sera multiplicado pelo numero referente a varredura do cpf
        for (let num in noveDigitos) {
            let referencia = numChave - num;
            if (referencia > 1) { 
                primeiroResult += parseInt(noveDigitos[num]) * referencia;
            } else {
                // se varredura chegar ao fim, retornar o valor sobra entre a divisao de ('primeiroResult' * 10) com 11
                segundoResult += (primeiroResult * 10) % 11;
                break;
            };
        };

        // retorno: true or false
        return segundoResult == digito;
    }

    // formatacao do cpf para validacao de digitos
    _formatarCpf (cpf) {
        const trim = cpf.trim();
        const replace1 = trim.replace(/-|/g,'');
        const replace2 = replace1.replace(/\./g,'');
        const isInteger = parseInt(replace2) != 0 ? replace2 : false;

        return isInteger;
    }

    // retorna true ou false para validacao de digitos do cpf
    validar (cpf) {
        const cpfFormatado = this._formatarCpf(cpf);
        if(!cpfFormatado) return false;
        const ftDigito = this._validarDigitos(cpfFormatado, 10);
        const scDigito = this._validarDigitos(cpfFormatado, 11);

        return ftDigito && scDigito;
    }
}

module.exports = ValidaCpf;