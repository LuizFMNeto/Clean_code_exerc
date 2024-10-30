function checkAdmin(usuario) {
    if (usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let usuario = { nome: "João", isAdmin: true };
checkAdmin(usuario);
