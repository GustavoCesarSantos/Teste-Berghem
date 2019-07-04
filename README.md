# Teste-Berghem
Teste para vaga de estagio Back-End

# __Cashier Helper__

Está API tem foco em auxiliar no calculo do troco em qualquer tipo de negociação e fornecer a menor quantidade de notas possiveis para realizar o mesmo.

Atravez de uma rota POST será informado o valor total a ser pago e o valor fornecido pelo cliente, e assim retorna o valor do troco com a menor quantidade de notas possíveis.

# __Tecnologias utilizadas__

- Editor de Texto: VS Code
- Npm
- NodeJs
- Express
- Body-Parser
- Postman


# __Configuração para Desenvolvimento__

#### __Instalar as dependencias com__:
```
npm install 
```

#### __Para iniciar a aplicação__:
```
node app.js
```

# __Consumo da Api__

#### __Porta utilizada__: 3000
#### __Rota__: /calc

#### __Variaveis fornecidas para o POST dentro do body__:

#### totalAmount: Variavel que informa o valor total da compra.
#### providedAmount: Variavel que informa o valor passado pelo cliente.
