let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value;
  if (nome.length < 1) {
    alert('Por favor insira um nome ! ');
  } else {
    amigos.push(nome);
    limparCampo();
  }
  listarAmigos();
}

function listarAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach((amigo) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

listarAmigos();

function sortearAmigo() {
  if (amigos.length < 1) {
    alert('Por favor insira um nome ! ');
  } else {
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `Parabéns o amigo secreto sorteado foi: ${amigoSorteado}`;
  }
}


function limparCampo() {
  document.getElementById('amigo').value = '';
}