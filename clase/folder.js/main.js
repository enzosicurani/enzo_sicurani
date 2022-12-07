function calculadora() {
    var valor1 = prompt("Ingrese un valor");
    valor1 = parseInt(valor1);
  
    var valor2 = prompt("Ingrese otro valor");
    valor2 = parseInt(valor2);
  
    var operacion = prompt("¿Que operacion desea realizar?");
  
    if (operacion == "sumar") {
      return "La suma es: " + sumar(valor1, valor2);
    }
    else if (operacion == "restar") {
      return "La resta es: " + restar(valor1, valor2);
    }
    else if (operacion == "multiplicar") {
      return "La multiplicacion es: " + multiplicar(valor1, valor2);
    }
    else if (operacion == "dividir") {
      return "La division es: " + dividir(valor1, valor2);
    }
  }
  
  calculadora();
  
  function sumar(a, b) {
    return a + b;
  }
  
  function restar (a, b) {
    return a - b;
  }
  
  function multiplicar (a, b) {
    return a * b;
  }
  
  function dividir (a, b) {
    return a / b;
  }