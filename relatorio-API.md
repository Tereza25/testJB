
## Relatório Teste Back-End | INSOLE

Desenvolvedora: Tereza Oliveira 

### Etapa 1: Criando servidor 

Foi realizado uma reestruturação de arquitertura para padrão MVC, criação do arquivo `server.js` e `app.js`para configuração de servidor, devido as mudanças, alterei a propriedade `"main": "index.js"` para `"main": "server.js"` no arquivo package.json. 

 que exerce a função de servidor 

 ### Etapa 2: Conexão banco de dados

 Na pasta `database`, dentro do arquivo `index.js`, declarei uma variável let chamada "db" e atribui o valor `mongoose.connection`, por fim a exportação da variável. 

 No arquivo `app.js`, atribui a sintaxe de conexão para melhor monitoramento da conexão do mongodb. 

 ```js
 db.on("error", console.log.bind(console, 'Erro de conexão'))
 db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
 });
```

Na pasta `models` e dentro do arquivo `productSchema.js` foi realizado uma modificação, passando a importar diretamente a lib mongoose. 


### Etapa 3: Criando Rotas e Endpoints

Na pasta `controllers` dentro do arquivo `productController` estruturei os endpoints de cada método CRUD, finalizando com o recurso de importação. 

Na pasta `routes`, criei o arquivo `productRoutes` cujo a finalidade é de armazenar as rotas de cada endpoint. 

### Testes

Durante o desenvolvimento da API, utilizei a ferramenta ESLint como recurso de padronização de código. 

Para testes de funcionamento da API, foram utilizadas as ferramentas Postman e Thunder Client. Tendo como resultado positivo em todas as requisições.  
