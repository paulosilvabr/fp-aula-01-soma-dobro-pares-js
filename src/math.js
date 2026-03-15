/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    const soma = numeros
        .filter(n => n % 2 === 0)
        .map(n => n*2)
        .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    return soma
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i];
        if (n % 2 === 0) soma += n*2
    }
    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
