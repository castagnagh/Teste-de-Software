# Testes Utilizando Selenium IDE em um Projeto Exemplo API - FRONT END

Bem-vindo. Este documento irá guiá-lo pelos passos necessários para configurar e utilizar a aplicação.

---

## 🚀 Primeiros Passos

### 1. Baixar o Node.js
- Faça o download e instale o Node.js a partir do link:
  [Node.js Download](https://nodejs.org/en/download/package-manager)
- Durante a instalação, apenas clique em **Next** e **Install**.

---

### 2. Clonar o Projeto
Execute o comando abaixo no terminal para clonar o projeto:

``` bash
git clone https://github.com/castagnagh/Teste-de-Software.git
```
---

### 3. Acessar a Pasta do Projeto
1. Abra a pasta onde o projeto foi clonado.
2. Clique na barra de endereço do explorador de arquivos.
3. Digite `CMD` e pressione **Enter** para abrir o terminal diretamente na pasta.

---

### 4. Instalar Dependências e Iniciar o Servidor

#### Comandos para instalar dependências:

``` bash
npm install
```
``` bash
node app.js
```


### 6. Acessar no Navegador
#### Acesse as URLs:

#### Cadastro: 
``` bash
http://localhost:3000/cadastro
```
#### Listagem:
``` bash
http://localhost:3000/listar
```

### Pronto! Agora a aplicação está pronta para uso. 🎉

## 🧪 Parte 2: Configurando os Testes de Front-End com Selenium


### Montar os Testes de Front-End
Instruções no vídeo abaixo e também o passo a passo descrito:

- **[Link para o Vídeo Tutorial](#)**




## 1. Instalar o Selenium IDE
- Acesse o gerenciador de extensões do Google Chrome.
- Busque por **Selenium IDE** e instale a extensão.
  - Link direto para a extensão: [Selenium IDE - Chrome Web Store](https://chromewebstore.google.com/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=pt-BR&utm_source=ext_sidebar)



## 2. Abrir o Selenium IDE
1. Após instalar, clique no ícone do **Selenium IDE** na barra de extensões do Chrome.
2. Se não estiver visível, clique no botão de extensões (ícone de quebra-cabeça) e fixe o Selenium IDE.



## 3. Criar um Novo Projeto
1. Na interface do Selenium IDE, clique em **Create a new project**.
2. Dê um nome ao projeto e clique em **OK**.



## 4. Configurar o Projeto
1. Clique em **Record a new test in a new project**.
2. Insira a URL inicial da sua aplicação (exemplo: `http://localhost:3000\listar`).
3. Clique em **Start Recording**.



## 5. Gravar Interações
1. O Selenium IDE abrirá uma nova janela do navegador para gravar suas ações.
2. Realize as ações desejadas na aplicação (exemplo: clicar em botões, preencher formulários, navegar entre páginas).
3. Após finalizar as ações, volte ao Selenium IDE e clique em **Stop Recording**.



## 6. Executar o Teste Gravado
1. No Selenium IDE, selecione o teste gravado na lista.
2. Clique no botão **Play current test case** para executar o teste.
3. Verifique se o teste foi executado corretamente no console de resultados.



## 7. Salvar o Projeto
1. Clique em **File > Save Project**.
2. Escolha um local para salvar o arquivo `.side` (formato do Selenium IDE).



## 📋 Requisitos

- **Node.js** instalado.
- **Google Chrome** com a extensão **Selenium IDE** configurada.

