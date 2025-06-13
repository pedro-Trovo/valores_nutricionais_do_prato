# Valores Nutricionais do Prato
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)


# Sumário

* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#tecnologias)
* [Contribuidores](#contribuidores)
* [Pré-requisitos](#pré-requisitos)
* [Análise do Prato de comida](#análise-do-prato-de-comida)
* [Inicializando o Projeto](#inicializando-o-projeto)
  * [Backend](#backend)
  * [Frontend](#frontend)
* [Protótipo Figma](#protótipo-figma)


## Sobre o Projeto

Este projeto foi desenvolvido com objetivo de criar um app que identifica alimentos em fotos de pratos usando a API Gemini e calcula os valores nutricionais correspondentes.



---

## Tecnologias

<table align="center">
  <tr>
    <th></th>
    <th>Frontend</th>
    <th>Backend</th>
  </tr>
  <tr>
    <th>Linguagens</th>
    <td>
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
    </td>
    <td>
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"/>
      <img alt="SQL" src="https://img.shields.io/badge/sql-%23007ACC.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <th>Frameworks / Bibliotecas</th>
    <td>
      <img alt="React Native" src="https://img.shields.io/badge/react--native-%2300D8FF.svg?style=for-the-badge&logo=react&logoColor=white"/>
      <img alt="Expo" src="https://img.shields.io/badge/expo-1B1F23.svg?style=for-the-badge&logo=expo&logoColor=white"/>
    </td>
    <td>
      <img alt="Node.js" src="https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white"/>
      <img alt="Express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge"/>
      <img alt="MySQL" src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
      <img alt="bcrypt" src="https://img.shields.io/badge/bcrypt-%23000.svg?style=for-the-badge&logo=npm&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <th>Editor</th>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
    <td>
      <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
    </td>
  </tr>
</table>

---
## Contribuidores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/gustavojoze">
        <img src="https://github.com/gustavojoze.png?size=70" width="70" alt="Gustavo José" />
        <br />
        <sub><b>Gustavo José</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JulianaHaddad">
        <img src="https://github.com/JulianaHaddad.png?size=70" width="70" alt="Juliana Haddad" />
        <br />
        <sub><b>Juliana Haddad</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LucasOkokama">
        <img src="https://github.com/LucasOkokama.png?size=70" width="70"  alt="Lucas Okokama" />
        <br />
        <sub><b>Lucas Okokama</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pedro-Trovo">
        <img src="https://github.com/pedro-Trovo.png?=size70" width="70"  alt="Pedro Trovo" />
        <br />
        <sub><b>Pedro Trovo</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="">
        <img src="https://avatars.githubusercontent.com/u/9919?v=4.png?=size70" width="70" alt="-------" />
        <br />
        <sub><b>Renan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/vicabats">
        <img src="https://github.com/vicabats.png?size=70" width="70" alt="-------" />
        <br />
        <sub><b>Vitória Batistoti</b></sub>
      </a>
    </td>
  </tr>
</table>

---

## Pré-requisitos

1. Instalar [Node.js](https://nodejs.org/)
2. Instalar [MySQL](https://dev.mysql.com/downloads/mysql/)
3. Instalar [Expo CLI](https://docs.expo.dev/get-started/installation/) para o frontend mobile
4. Criar uma [API Key](https://ai.google.dev/gemini-api/docs/api-key) do Gemini

---

## Análise do Prato de comida

### 🔗 Endpoint: `POST /gemini/analyze`

### 🧠 O que faz?
Esse endpoint utiliza inteligência artificial (Google Gemini) para analisar a foto de um prato de comida, cruzando as informações visuais com um arquivo CSV da TACO (Tabela Brasileira de Composição de Alimentos), que contém os dados nutricionais dos alimentos. Através de prompts bem definidos, o modelo gera uma análise nutricional estimada do prato, retornando os alimentos identificados, seus respectivos valores calóricos, os macronutrientes e uma avaliação se o prato é considerado saudável ou não.

### 📥 Request
| Campo        | Tipo   | Descrição           |
| ------------ | ------ | ------------------- |
| `imagePath`  | `file` | Foto do prato (JPG) |
| `tablePath`  | `file` | Arquivo CSV da TACO |

### 📤 Response
| Campo             | Tipo    | Descrição                                                                                          |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------- |
| `alimentos`       | Array   | Lista de alimentos identificados no prato, contendo nome e calorias de cada alimento.              |
| `macronutrientes` | Array   | Lista dos macronutrientes totais do prato, contendo nome do macronutriente e quantidade em gramas. |
| `ehSaudavel`      | Boolean | Indica se o prato é considerado saudável (`true` ou `false`), baseado na composição nutricional.   |

```json
{
  "alimentos": [
    {
      "alimento": "Arroz",
      "calorias": 250
    },
    {
      "alimento": "Feijão",
      "calorias": 150
    }
  ],
  "macronutrientes": [
    {
      "macronutriente": "Proteínas",
      "gramas": 20
    },
    {
      "macronutriente": "Carboidratos",
      "gramas": 50
    },
    {
      "macronutriente": "Gorduras",
      "gramas": 15
    }
  ],
  "ehSaudavel": true
}
```

---

## Inicializando o Projeto
1. Clone o repositório e entre na pasta backend:
```bash
git clone https://github.com/pedro-Trovo/valores_nutricionais_do_prato.git
```

2. Entre na pasta do projeto:
```bash
cd valores_nutricionais_do_prato
```


### Backend
1. Entre na pasta `back-express`:
```bash
cd back-express
```

2. Instale as dependências:
```bash
npm install
```

3. Crie e configure o arquivo .env com as variáveis de ambiente:
```bash
> Exemplo
DB_HOST=localhost
DB_USER=<SEU_USUARIO>
DB_PASSWORD=<SUA_SENHA>
DB_NAME=db_vnp
PORT=3000
GEMINI_API_KEY=<SUA_CHAVE_API>
```

4. Iniciando o banco de dados:
Para criar o banco de dados e as tabelas, execute o comando:
```bash
mysql -u root -p < database/init.sql
```

Após esse comando, será solicitado que você digite a senha do usuário root do MySQL.

Se o comando mysql não for reconhecido, significa que o Windows não está encontrando o executável do MySQL no PATH do sistema. Isso gera o seguinte erro:
```bash
'mysql' não é reconhecido como um comando interno ou externo
```

Para corrigir, siga os passos:
- Localize a pasta bin do MySQL e copie seu caminho:
```cmd
> Exemplo
C:\Program Files\MySQL\MySQL Server 8.0\bin
```

- No Windows, abra o menu Iniciar e pesquise por `Editar variáveis de ambiente do sistema`.

- Na janela que abrir, clique em `Variáveis de Ambiente` e localize e selecione a variável chamada `Path`.

- Clique em `Editar`, depois em `Novo` e cole o caminho da pasta bin do MySQL.

- Salve todas as alterações e feche as janelas.

- Abra um novo Prompt de Comando (CMD) para que as mudanças tenham efeito.

- Execute novamente o comando para iniciar o banco:
```bash
mysql -u root -p < database/init.sql
```


6. Inicie o servidor em modo desenvolvimento (com recarga automática):
```bash
npm run dev
```
7. A API estará disponível em 
```bash
http://localhost:3000
```


### Frontend
1. Entre na pasta `mobile`:
```bash
cd mobile
```

2. Instale as dependências:
```bash
npm install
```

3. Crie e configure o arquivo .env com as variáveis de ambiente:
```bash
API_URL_IPV4=<SEU_ENDERECO_IPV4>
```

4. Inicie o app com Expo:
```bash
npm start
```

5. Abertura do app

#### 🖥️ Navegador com visualização mobile
1. Pressione `w` no terminal.
2. No navegador, abra as ferramentas de desenvolvedor (`F12` ou `Ctrl+Shift+I`).
3. Ative o modo responsivo (ícone de celular/tablet no DevTools).
4. Selecione um dispositivo (ex: iPhone 12) para simular a visualização mobile.

#### 📱 Dispositivo físico
1. Instale o app **Expo Go** no seu celular (Android ou iOS).
2. Escaneie o QR code que aparece no terminal ou no navegador.
3. O app será aberto no seu celular via rede local.

#### 📱 Emulador Android/iOS
1. Certifique-se de que você tem um emulador Android ou iOS configurado.
2. Pressione `a` (Android) ou `i` (iOS) no terminal.
3. O app será aberto no emulador.

## Protótipo Figma
- Clique no botão abaixo para acessar o protótipo do app no Figma:
<br> <br>
[![Figma Prototype](https://img.shields.io/badge/Figma-Prot%C3%B3tipo-blue?logo=figma)](https://www.figma.com/proto/kbsADu9RapNf2PGsgVe4z5/NutriApp?node-id=1-9&p=f&t=DzcY7YnjhHRYmXEi-1&scaling=contain&content-scaling=fixed&page-id=0%3A1)

