function NumerosPares(vetor) {
    let vetorNumerosPares = [];
    for (let indice = 0; indice < vetor.length; indice++) {
        if (vetor[indice] % 2 === 0) {
            vetorNumerosPares.push(vetor[indice]);
        }
    }
    return vetorNumerosPares;
}

let vetorTeste = [1, 2, 3, 4, 5, 6];
let vetorTestePares = NumerosPares(vetorTeste);
console.log(vetorTestePares);
