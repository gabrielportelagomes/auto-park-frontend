# AutoPark - front-end

## Sobre

Front-end para a aplicação AutoPark, um gerenciador de estacionamento.

## Como executar em desenvolvimento

1. Clone este repositório
2. Instale todas as dependências

```bash
npm i
```

3. Certifique-se de que o back-end está em funcionamento [(AutoPark-back)](https://github.com/gabrielportelagomes/auto-park-backend)
4. Configure o arquivo `.env` usando como referência o arquivo `.env.example` 
5. Execute o fron-end no ambiente de desenvolvimento:

```bash
npm run dev
```

## Building e execução para ambiente de produção

```bash
npm run build
npm run preview
```

## Executar em um contâiner do Docker

1. Configure o arquivo `.env`
2. Certifique-se de que o back-end está em funcionamento
3. Execute o comando
```bash
docker compose up
```

## O que fazer quando adicionar novas ENV VARIABLES

- Adicione elas no arquivo `.env.example`
- Adicione elas nos seus arquivos locais `.env.development` e `.env.test`
- Adicione elas nos arquivos `.github/workflows/`
