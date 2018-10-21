//creamos las variables
var boton0 = document.getElementById('0');
var boton1 =document.getElementById('1');
var boton2 =document.getElementById('2');
var boton3 =document.getElementById('3');
var boton4 =document.getElementById('4');
var boton5 =document.getElementById('5');
var boton6 =document.getElementById('6');
var boton7 =document.getElementById('7');
var boton8 =document.getElementById('8');
var boton9 =document.getElementById('9');
var botonon =document.getElementById('on');
var botonsign =document.getElementById('sign');
var botonraiz =document.getElementById('raiz');
var botondiv =document.getElementById('dividido');
var botonpor =document.getElementById('por');
var botonmenos =document.getElementById('menos');
var botonpunto =document.getElementById('punto');
var botonigual =document.getElementById('igual');
var botonmas =document.getElementById('mas');
var pantalla =document.getElementById('display');
var opera1;
var opera2;
var operacion;

//creando los comandos para precionar los botones

boton0.addEventListener("mousedown", function () {
  boton0.style = "transform:scale(0.95,0.95)";
})
boton0.addEventListener("mouseup", function () {
  boton0.style = "transform:scale(1,1)";
})

boton1.addEventListener("mousedown", function () {
  boton1.style = "transform:scale(0.95,0.95)";
})
boton1.addEventListener("mouseup", function () {
  boton1.style = "transform:scale(1,1)";
})
boton2.addEventListener("mousedown", function () {
  boton2.style = "transform:scale(0.95,0.95)";
})
boton2.addEventListener("mouseup", function () {
  boton2.style = "transform:scale(1,1)";
})
boton3.addEventListener("mousedown", function () {
  boton3.style = "transform:scale(0.95,0.95)";
})
boton3.addEventListener("mouseup", function () {
  boton3.style = "transform:scale(1,1)";
})
boton4.addEventListener("mousedown", function () {
  boton4.style = "transform:scale(0.95,0.95)";
})
boton4.addEventListener("mouseup", function () {
  boton4.style = "transform:scale(1,1)";
})
boton5.addEventListener("mousedown", function () {
  boton5.style = "transform:scale(0.95,0.95)";
})
boton5.addEventListener("mouseup", function () {
  boton5.style = "transform:scale(1,1)";
})
boton6.addEventListener("mousedown", function () {
  boton6.style = "transform:scale(0.95,0.95)";
})
boton6.addEventListener("mouseup", function () {
  boton6.style = "transform:scale(1,1)";
})
boton7.addEventListener("mousedown", function () {
  boton7.style = "transform:scale(0.95,0.95)";
})
boton7.addEventListener("mouseup", function () {
  boton7.style = "transform:scale(1,1)";
})
boton8.addEventListener("mousedown", function () {
  boton8.style = "transform:scale(0.95,0.95)";
})
boton8.addEventListener("mouseup", function () {
  boton8.style = "transform:scale(1,1)";
})
boton9.addEventListener("mousedown", function () {
  boton9.style = "transform:scale(0.95,0.95)";
})
boton9.addEventListener("mouseup", function () {
  boton9.style = "transform:scale(1,1)";
})
botonon.addEventListener("mousedown", function () {
  botonon.style = "transform:scale(0.95,0.95)";
})
botonon.addEventListener("mouseup", function () {
  botonon.style = "transform:scale(1,1)";
})
botonsign.addEventListener("mousedown", function () {
  botonsign.style = "transform:scale(0.95,0.95)";
})
botonsign.addEventListener("mouseup", function () {
  botonsign.style = "transform:scale(1,1)";
})
botonraiz.addEventListener("mousedown", function () {
  botonraiz.style = "transform:scale(0.95,0.95)";
})
botonraiz.addEventListener("mouseup", function () {
  botonraiz.style = "transform:scale(1,1)";
})
botondiv.addEventListener("mousedown", function () {
  botondiv.style = "transform:scale(0.95,0.95)";
})
botondiv.addEventListener("mouseup", function () {
  botondiv.style = "transform:scale(1,1)";
})
botonpor.addEventListener("mousedown", function () {
  botonpor.style = "transform:scale(0.95,0.95)";
})
botonpor.addEventListener("mouseup", function () {
  botonpor.style = "transform:scale(1,1)";
})
botonmas.addEventListener("mousedown", function () {
  botonmas.style = "transform:scale(0.95,0.95)";
})
botonmas.addEventListener("mouseup", function () {
  botonmas.style = "transform:scale(1,1)";
})
botonmenos.addEventListener("mousedown", function () {
  botonmenos.style = "transform:scale(0.95,0.95)";
})
botonmenos.addEventListener("mouseup", function () {
  botonmenos.style = "transform:scale(1,1)";
})
botonpunto.addEventListener("mousedown", function () {
  botonpunto.style = "transform:scale(0.95,0.95)";
})
botonpunto.addEventListener("mouseup", function () {
  botonpunto.style = "transform:scale(1,1)";
})
botonigual.addEventListener("mousedown", function () {
  botonigual.style = "transform:scale(0.95,0.95)";
})
botonigual.addEventListener("mouseup", function () {
  botonigual.style = "transform:scale(1,1)";
})

//comando para poner en pantalla los numeros
boton0.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  pantalla.innerHTML = "0";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "0";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton1.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "1";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "1";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton2.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "2";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "2";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton3.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "3";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "3";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton4.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "4";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "4";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton5.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "5";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "5";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton6.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "6";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "6";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton7.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "7";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "7";
//es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton8.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "8";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "8";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
boton9.addEventListener("click", function (e) {
if (pantalla.innerHTML==="0") {
  resetar()
  pantalla.innerHTML = pantalla.innerHTML+ "9";
}
else {
  pantalla.innerHTML = pantalla.innerHTML+ "9";
  //es para que se muestre solo 8 digitos
  pantalla.innerHTML = String(pantalla.innerHTML).substr(0,8);
}
})
//agregamos el punto
botonpunto.addEventListener("click", function (e) {
if (display.innerHTML.indexOf(".") == (-1)) {
pantalla.innerHTML = pantalla.innerHTML + ".";
}
})
//boton on o limpiar
botonon.addEventListener("click", function (e) {
  limpiar();
  pantalla.innerHTML = "0";
})

// funciones de aritmeticas
botonmas.addEventListener("click", function (e) {
  opera1 = pantalla.innerHTML;
  operacion = "+";
  limpiar();
})
botonmenos.addEventListener("click", function (e) {
  opera1 = pantalla.innerHTML;
  operacion = "-";
  limpiar();
})
botonpor.addEventListener("click", function (e) {
  opera1 = pantalla.innerHTML;
  operacion = "*";
  limpiar();
})
botondiv.addEventListener("click", function (e) {
  opera1 = pantalla.innerHTML;
  operacion = "/";
  limpiar();
})

//funcion de igual
botonigual.addEventListener("click", function (e) {
  opera2 = pantalla.innerHTML;
  resolver();
})
// funcion de limpiar
function limpiar() {
  pantalla.innerHTML = "";
}

//funcion resetear
function resetar() {
  pantalla.innerHTML = "";
  opera1 = 0;
  opera2 = 0;
  operacion = "";
}

//variable resolver todo
function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat (opera1) + parseFloat(opera2);
     break;
    case "-":
      res = parseFloat (opera1) - parseFloat(opera2);
     break;
    case "/":
        res = parseFloat (opera1) / parseFloat(opera2);
     break;
    case "*":
          res = parseFloat (opera1) * parseFloat(opera2);
      break;
  }
  resetar();
  pantalla.innerHTML = res;
}

//cambio de signo
botonsign.addEventListener("click", function (e) {
    aux = parseFloat (pantalla.innerHTML) * (-1);
    pantalla.innerHTML=aux;
  })
