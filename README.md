SWAPI The Star Wars API - consumo de dados

Demonstração: (https://paula-nader-space-motors.netlify.app)[https://paula-nader-space-motors.netlify.app]

Tecnologias
Front-end: ReactJS (Typescript)
Instalação
Pré-requisitos:

Yarn (opcional)
Após clonar o projeto e instalar os pré-requisitos, execute a partir da pasta raiz:

npm install

ou

yarn

Crie o arquivo .env a partir do .env.example:

cp .env.example .env
Preencha as variáveis de ambiente do .env com os dados abaixo:

REACT_APP_API_BASE_URL=https://swapi.dev/api
REACT_APP_API_CEP_BASE_URL=https://viacep.com.br/ws

Após a instalação, para rodar o projeto, execute:

npm run start
ou

yarn start
