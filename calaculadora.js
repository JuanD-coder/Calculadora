

  let valor_digitado = ""
  let Numero_1 = ""
  let Numero_2 = ""
  let operacion = ""

 function uno(){
   valor_digitado = document.getElementById('pantalla').value;
   document.getElementById('pantalla').value = valor_digitado +1;
 }

 function dos(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +2;
 }

 function tres(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +3;
 }

 function cuatro(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +5;
 }

 function cinco(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +5;
 }

 function seis(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +6;
 }

 function siete(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +7;
 }

 function ocho(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +8;
 }

 function nueve(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +9;
 }

 function cero(){
  valor_digitado = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = valor_digitado +0;
 }


 function Suma(){

    Numero_1 = document.getElementById('pantalla').value;
    valor_digitado = "";
    document.getElementById('pantalla').value = '';
    operacion = "suma";
     
 }

  function Resta(){

    Numero_1 = document.getElementById('pantalla').value;
    valor_digitado = "";
    document.getElementById('pantalla').value = '';
    operacion = "resta";

  }

  function Multiplicar(){

    Numero_1 = document.getElementById('pantalla').value;
    valor_digitado = "";
    document.getElementById('pantalla').value = '';
    operacion = "multiplicacion";

  }

  function Dividir(){

    Numero_1 = document.getElementById('pantalla').value;
    valor_digitado = "";
    document.getElementById('pantalla').value = '';
    operacion = "dividir";

  }

  function igual(){

    Numero_2 = document.getElementById('pantalla').value;
    if (operacion == "suma"){
      document.getElementById('pantalla').value = parseFloat(Numero_1) + parseFloat(Numero_2);
    }
    
    if (operacion == "resta"){
      document.getElementById('pantalla').value = parseFloat(Numero_1) - parseFloat(Numero_2);
    }

    if (operacion == "multiplicacion"){
      document.getElementById('pantalla').value = parseFloat(Numero_1) * parseFloat(Numero_2);
    }

    if (operacion == "dividir"){
      document.getElementById('pantalla').value = parseFloat(Numero_1) / parseFloat(Numero_2);
    }

  }

  function rest(){
    Numero_1 = 0;
    Numero_2 = 0;
    document.getElementById('pantalla').value = '';
  }

  

