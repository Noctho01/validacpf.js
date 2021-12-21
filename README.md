# VALIDACPF.JS
> Valida CPF usando algoritmo de validação de dígitos

Projeto simples(bem simples) usando o algoritmo de calculo de validacao de CPF distribuido pelo
[Ministerio da Fazenda](https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp)

- [Algoritmo para Validar CPF](https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf)

## Usando o ValidaCpf.js:
- Adicione validacpf em 'remote':
```bash
git remote add validacpf https://github.com/Noctho01/validacpf.js.git
```

- De um 'pull' no repositorio:
```bash
git pull validacpf master
```

- Usando validacpf:
```js
const validaCpf = require('validacpf');

const cpf = "000.000.000-00";
const resultado = validaCpf.validar(cpf);
console.log(resultado) // true or false
```



<a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript"><img src="icons/javascript.png"></a>

<a href="https://github.com/Noctho01/validacpf.js/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Noctho01/validacpf.js"></a>
