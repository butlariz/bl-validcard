# Validar Número de Cartão v1.1.0

Essa biblioteca se destina a validar números de cartões, utilizando o algoritimo de Luhn, para uso em aplicações web.

## Os métodos utilizados na biblioteca são: 

**cardValidator(num)**

Exemplo de uso:

```
$node 
> let validator = require('cardValidator')
> validator(36490102462661); //true
``` 

## versão 1.1.0  

- Funcionalidades: verifica se o número de cartão é valido de acordo com o algorítimo de Luhn

## instalação

- Você deverá ter o node e o npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- Proceda com a instalação com `$npm install bl-validcard`

## roadmap oficial do projeto  

### versão 2.0.0 (sem previsão)
- Aceitar números com espaço 
- Verificar qual a bandeira, além de validar

### versão 1.1.0 (released)
- Funcionalidades: verifica se o número do cartão é válido
- Aceita números sem espaço
