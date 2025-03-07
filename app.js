const listaAmigos = [];
const outListaAmigos = document.getElementById('listaAmigos');
const outResultado = document.getElementById('resultado');


function validarCampo(entrada) {

    entrada = entrada.trim();

    return entrada == '' ? false : true;
}

function validarSorteio() {
    return listaAmigos.length != 0 && listaAmigos.length >= 2;
}

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

    if(validarCampo(nomeAmigo)) {
        listaAmigos.push(nomeAmigo);
        exibirListaAmigos(nomeAmigo);
    } else {
        alert('Informe algum nome válido no campo');
    }

}

function sortearAmigo() {
    
    if(validarSorteio()) {
        const i = parseInt(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[i];
        exibirResultado(amigoSorteado);
    } else {
        alert('Informe pelo menos dois nomes de amigos para iniciar o sorteio.');
    }
}