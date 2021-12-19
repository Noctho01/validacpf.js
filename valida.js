class Valida {
    validarDigitos (cpf, multiplos) {
        const digito = parseInt(cpf[multiplos - 1]);
        const noveDigitos = cpf.slice(0, multiplos);
        let primeiroResult = 0;
        let segundoResult = 0;
        
        for (let num in noveDigitos) {
            let referencia = multiplos - num;
            if (referencia > 1) { 
                primeiroResult += parseInt(noveDigitos[num]) * referencia;
            } else {
                segundoResult += (primeiroResult * 10) % 11;
                break;
            };
        };

        return segundoResult == digito;
    }

    formatarCpf (cpf) {
        const trim = cpf.trim();
        const replace1 = trim.replace(/-|/g,'');
        const replace2 = replace1.replace(/\./g,'');
        const isInteger = parseInt(replace2) != 0 ? replace2 : false;

        return isInteger;
    }

    validar (cpf) {
        const cpfFormatado = this.formatarCpf(cpf);
        if(!cpfFormatado) return false;
        const ftDigito = this.validarDigitos(cpfFormatado, 10);
        const scDigito = this.validarDigitos(cpfFormatado, 11);

        return ftDigito && scDigito;
    }
}

module.exports = Valida;