const listaAmigos = [];
const outListaAmigos = document.getElementById('listaAmigos');
const outResultado = document.getElementById('resultado');

function exibirListaAmigos(nome) {
    outListaAmigos.innerHTML += `<li>${nome}</li>`;
}

function exibirResultado(nome) {
    outListaAmigos.innerHTML = '';
    outResultado.innerHTML = nome;
}

function adicionarAmigo() {
    
    const inAmigo = document.getElementById('amigo');
    const nomeAmigo = inAmigo.value;

    listaAmigos.push(nomeAmigo);
    exibirListaAmigos(nomeAmigo);
}

function sortearAmigo() {
    
    const i = parseInt(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[i];

    exibirResultado(amigoSorteado);
}