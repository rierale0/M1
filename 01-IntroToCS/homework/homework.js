'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  // digits es una array generado a partir de los digitos de num.
  // Ejemplo: Si num = 110; digits = [1,1,0]
  let digits = Array.from(String(num), Number);
  
  // reversed es el array inverso de digits
  let reversed = digits.reverse();

  // addends es un array con los sumandos que usaremos para determinar
  // el valor decimal de num
  let addends = [];
  
  // Si num no es binario retornará una alerta
  // Si num es binario realizaremos la multiplicación de cada elemento de reversed
  // multiplicado por 2 elevado a la i potencia
  if (digits.length == digits.filter(x => x == 0 || x == 1).length) {
    for (let i = 0; i < digits.length; i++) {
      addends.push(reversed[i]*2**i)
    }

    // retornamos la suma de los elementos en addends usando .reduce()
    // JavaScript Array Reduce https://www.youtube.com/watch?v=g1C40tDP0Bk Programming with Mosh
    return addends.reduce((accumulator, curr) => accumulator + curr, 0)
  } else {
    return alert("No es binaria esa vaina. Dale otra vez")
  }
 }

function DecimalABinario(num) {
  // tu codigo aca

  // dividend = num; es el decimal que vamos a dividir / 2
  // binary = primer módulo de num al ser dividido / 2 y convertido a String
  let dividend = num;
  let binary = (num % 2).toString();

  // mediante un bucle for siempre que dividend > 1 vamos a cambiar el valor de dividend al dividir dividend / 2
  // tomando la parte entera unicamente

  // mientras que tomamos el módulo % 2 del nuevo dividend y lo sumamos a binary (Pero ya que binary es String
  // se va a concatenar y así vamos a formar el binario deseado)
  for ( ;dividend > 1; ) {
    dividend = parseInt(dividend / 2);
    binary = (dividend % 2) + binary;
  }

  return binary

  }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}