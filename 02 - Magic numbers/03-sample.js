function calcularFrete(distancia) {
    var taxaFrete = 10;
    return distancia * taxaFrete;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
