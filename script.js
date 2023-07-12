
1-

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " par");
    } else {
      console.log(numero + " impar");
    }
  }

  
 

2-

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
      console.log(numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
      console.log(numero2 + " es mayor que " + numero1);
    } else {
      console.log("Ambos números son iguales");
    }
  }
  

  3-

  function verificarMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5");
    } else {
      console.log(numero + " no es múltiplo de 5");
    }
  }

  4-

  function imprimirNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  
  5-

  function imprimirPalabra(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }

  6-

  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  
  7-

  function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }

  8-

  
  function imprimirArrayMultiplicado(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }
  

