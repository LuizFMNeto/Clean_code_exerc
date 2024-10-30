async function buscarPersonagemPorId(id) {
    const url = encodeURIComponent(`https://swapi.dev/api/people/${id}/%%%`);
    const resposta = await fetch(url);
    const personagem = await resposta.json();
    console.log(personagem);
}

const lukeId = 1;
buscarPersonagem(lukeId);
