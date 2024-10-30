let nomeUsuario = "Pedro";
let idadeUsuario = 25;
let usuarioAtivo = true;

function atividadeUsuario(nomeUsuario, idadeUsuario, usuarioAtivo) {
    if (usuarioAtivo) {
        console.log(nomeUsuario + " tem " + idadeUsuario + " anos e está ativo.");
    } else {
        console.log(nomeUsuario + " está inativo.");
    }
}

atividadeUsuario(nomeUsuario, idadeUsuario, usuarioAtivo);
