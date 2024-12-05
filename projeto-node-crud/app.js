const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração do Handlebars
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração para parsing de dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Caminho do arquivo JSON
const DATA_FILE = path.join(__dirname, 'data', 'data.json');

// Função para carregar dados
function loadData() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

// Função para salvar dados
function saveData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Rota: Tela de cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

// Rota: Submeter cadastro
app.post('/cadastro', (req, res) => {
    const { nome, endereco } = req.body;
    const data = loadData();
    data.push({ id: Date.now(), nome, endereco });
    saveData(data);
    res.redirect('/listar');
});

// Rota: Tela de listagem
app.get('/listar', (req, res) => {
    const data = loadData();
    res.render('listar', { registros: data });
});

// Rota: Tela de edição
app.get('/editar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = loadData();
    const registro = data.find((item) => item.id === id);
    res.render('editar', { registro });
});

// Rota: Submeter edição
app.post('/editar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, endereco } = req.body;
    const data = loadData();
    const index = data.findIndex((item) => item.id === id);
    if (index >= 0) {
        data[index] = { id, nome, endereco };
        saveData(data);
    }
    res.redirect('/listar');
});

// Rota: Excluir registro
app.get('/excluir/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = loadData();
    const filteredData = data.filter((item) => item.id !== id);
    saveData(filteredData);
    res.redirect('/listar');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
