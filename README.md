# Rocketseat - Exemplo de API REST usando Serverless

Este repositório consiste de uma API feita em Node.js que usa serverless framework, AWS API Gateway, Lambdas e DynamoDB.

Na branch `complete` você encontra a versão final deste workshop.

Sugiro que você não pare por aqui, durante o workshop passamos muito brevemente por cada ferramenta, sem entrar em detlhes sobre como ela funciona. Pegue um tempo para estudar cada uma delas individualmente e como você pode tirar o máximo de proveito dela.

## Rodando o projeto

O foco do workshop foi rodar a aplicação direto na AWS, portanto não abordamos como rodar local. Para saber como você pode rodar local, olhe a sessão [Rodando localmente](#rodando-localmente). Tudo foi feito em um Mac, no Linux deve ser bem parecido e no Windows deve ser possível fazer o equivalente com algumas adaptações.

### Requisitos

- Node.js - Há um arquivo `.nvmrc` no projeto caso queira realizar a instalação usando o [nvm](https://github.com/nvm-sh/nvm).
- Uma conta na [AWS](https://aws.amazon.com/pt/console/) - Se você ainda não tem conta, vai precisar de um cartão de crédito, mas não se preocupe, existe um [free tier](https://aws.amazon.com/pt/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc) para experimentar os recursos.
- [Serverless framework](https://www.serverless.com/) - Pode ser instalado usando o comando `npm install -g serverless`

### Fazendo o deploy

1. Crie uma conta de acesso programático com acesso de admin no [IAM](https://console.aws.amazon.com/iam/home) da AWS e pegar a chave e a secret.
2. Configure o serverless para usar essa conta, isso pode ser feito usando o serverless: `serverless config credentials -o --provider aws --key <chave> --secret <secret>`
3. Depois de configurar o `serverless.yml` com os recursos desejados, fazer deploy usando o comando `serverless deploy`

Ao fazer o deploy, é interessante olhar o que foi criado nos seguintes serviços no console:

- Cloud Formation
- S3
- Lambda
- API Gateway
- DynamoDB

E caso queira ver os logs das Lambdas, vá até o detalhe de uma delas e na aba `Monitoramento`, clique em `Visualizar logs no CloudWatch`.

## Rodando localmente

Durante o workshop, sempre que fazíamos uma modificação, fazíamos o deploy para testar. Em aplicações reais isso se torna inviável, portanto, para conseguir testar com mais facilidade, sugiro o estudo de duas ferramentas:

- [Serverless Offline Plugin](https://www.serverless.com/plugins/serverless-offline) - emula lambdas e API Gateway na sua máquina, subindo um servidor para gerenciar as requisições.
- [Serverless DynamoDB Plugin](https://www.serverless.com/plugins/serverless-dynamodb-local) - plugin do serverless para rodar o DynamoDB localmente. Também existe a opção de usar [Docker para rodar o DynamoDB](https://hub.docker.com/r/amazon/dynamodb-local/).

## Links e referências

Eu escrevi um artigo baseado no workshop e que tem algumas das informações que falei durante ele, para acessar clique [aqui](https://askanayama.medium.com/criando-uma-api-rest-escal%C3%A1vel-usando-serverless-api-gateway-e-dynamodb-5d0e080885ba).

- [Como criar um usuário no IAM](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) - Caso você não tenha familiaridade com a criação de usuários na AWS usando IAM
- [Serverless Express Plugin](https://www.serverless.com/plugins/serverless-express) - Caso tenha interesse em trabalhar com Express ou Koa, é possível usando um plugin do Serverless. Porém vale sempre pesar o que é melhor para o seu caso de uso, por exemplo, o uso do Express pode aumentar o seu tempo de cold start um pouco.
- [Serverless Middleware Plugin](https://www.serverless.com/plugins/serverless-middleware) - Plugin para a criação de middlewares usando Serverless

## Problemas e dúvidas

Caso tenha qualquer dúvida, problema ou sugestão, fique à vontade para criar uma issue neste repo, e eu responderei assim que possível.
