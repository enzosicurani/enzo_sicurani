function calculadora() {
   while (calculadora != sumar, restar, multiplicar, dividir) {
    
    var valor1 = prompt("Ingrese un valor");
    valor1 = parseInt(valor1);
  
    var valor2 = prompt("Ingrese otro valor");
    valor2 = parseInt(valor2);
  
    var operacion = prompt("¿Que operacion desea realizar?");
  
    if (operacion == "sumar") { alert (`La suma es: ${sumar(valor1, valor2)}`)
      return "La suma es: " + sumar(valor1, valor2);
    }
    else if (operacion == "restar") { alert (`La resta es: ${restar(valor1, valor2)}`)
      return "La resta es: " + restar(valor1, valor2);
    }
    else if (operacion == "multiplicar") { alert (`La multiplicacion es: ${multiplicar(valor1, valor2)}`)
      return "La multiplicacion es: " + multiplicar(valor1, valor2);
    }
    else if (operacion == "dividir") { alert (`La division es: ${dividir(valor1, valor2)}`)
      return "La division es: " + dividir(valor1, valor2);
    }
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