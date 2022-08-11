function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
  }
  
  
  let textoAsteriscos = crearCadena.bind(undefined, "*", "*");

  console.log(textoAsteriscos("Hola"));