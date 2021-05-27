/*Varibales globales*/
let btn0_0 = document.getElementById("btn0_0");
let btn0_1 = document.getElementById("btn0_1");
let btn0_2 = document.getElementById("btn0_2");
let btn1_0 = document.getElementById("btn1_0");
let btn1_1 = document.getElementById("btn1_1");
let btn1_2 = document.getElementById("btn1_2");
let btn2_0 = document.getElementById("btn2_0");
let btn2_1 = document.getElementById("btn2_1");
let btn2_2 = document.getElementById("btn2_2");
let txtnameJ1 = document.getElementById("txtnameJ1");
let txtnameJ2 = document.getElementById("txtnameJ2");
let lblNombreJ1=document.getElementById("lblNombreJ1");

let bot=false;
let turno = 1;
let puntosJ1 = 0;
let puntosJ2 = 0;
let conCasillas = 0;
let nombreJ1 = "Jugador 1";
let nombreJ2 = "Jugador 2";

/*Comprobar nombre de los jugadores*/
txtnameJ1.addEventListener("keydown", (e) => {
  console.log(txtnameJ1.value);
  if (txtnameJ1.value.trim() !== "") {
    console.log(txtnameJ1.textContent)
    nombreJ1 = txtnameJ1.value.trim();
    lblNombreJ1.textContent=`Puntos ${nombreJ1}:` 
  } else{
    nombreJ1 = "Jugador 1";
    lblNombreJ1.textContent=`Puntos ${nombreJ1}`
  }
});

txtnameJ2.addEventListener("keypress", (e) => {
  if (txtnameJ2.value.trim() !== "") {
    nombreJ2 = txtnameJ2.value.trim();
    lblNombreJ1.value=`Puntos ${nombreJ1}:`    
  } else {
    nombreJ2 = "Jugador 1";
    lblNombreJ1.value=`Puntos ${nombreJ1}:`
  }
});

btn0_0.addEventListener("click", (e) => {
  dibujar(btn0_0);
});

btn0_1.addEventListener("click", (e) => {
  dibujar(btn0_1);
});

btn0_2.addEventListener("click", (e) => {
  dibujar(btn0_2);
});

btn1_0.addEventListener("click", (e) => {
  dibujar(btn1_0);
});

btn1_1.addEventListener("click", (e) => {
  dibujar(btn1_1);
});
btn1_1.addEventListener("click", (e) => {
  dibujar(btn1_1);
});
btn1_2.addEventListener("click", (e) => {
  dibujar(btn1_2);
});
btn2_0.addEventListener("click", (e) => {
  dibujar(btn2_0);
});
btn2_1.addEventListener("click", (e) => {
  dibujar(btn2_1);
});
btn2_2.addEventListener("click", (e) => {
  dibujar(btn2_2);
});

function dibujar(btn) {
  if (btn.value === "") {
    if (turno === 1) {
      btn.value = "X";
      btn.classList.add("btnX");
      comprobarGanador(turno);
      turno++;
    } else {
      btn.value = "O";
      btn.classList.add("btnO");
      comprobarGanador(turno);
      turno--;
    }
  }
}

function comprobarGanador(turno) {
  conCasillas++;
  if (conCasillas < 9) {
    if (turno === 1 && gano()) {
      puntosJ1++;
      mostrarMensaje(turno);
      Limpiar();
    } else if (turno === 2 && gano()) {
      puntosJ2++;
      mostrarMensaje(turno);
      Limpiar();
    }
  } else {

  }
}
function mostrarMensaje(turno) {
  if (turno === 1) {
  } else {

  }
}

function mostrarEmpate() {}
function gano() {
  /*
    [0_0][0_1][0_2]
    [1_0][1_1][1_2]
    [2_0][2_1][2_2]
    */
  //comprobamos las filas
  if (
    btn0_0.value === btn0_1.value &&
    btn0_1.value === btn0_2.value &&
    btn0_0.value !== ""
  ) {
    return true;
  }
  if (
    btn1_0.value === btn1_1.value &&
    btn1_1.value === btn1_2.value &&
    btn1_0.value !== ""
  ) {
    return true;
  }
  if (
    btn2_0.value === btn2_1.value &&
    btn2_1.value === btn2_2.value &&
    btn2_0.value !== ""
  ) {
    return true;
  }

  //comprobamos las culumnas

  /*
    [0_0][0_1][0_2]
    [1_0][1_1][1_2]
    [2_0][2_1][2_2]
    */
  if (
    btn0_0.value === btn1_0.value &&
    btn1_0.value === btn2_0.value &&
    btn0_0.value !== ""
  ) {
    return true;
  }
  if (
    btn0_1.value === btn1_1.value &&
    btn1_1.value === btn2_1.value &&
    btn0_1.value !== ""
  ) {
    return true;
  }
  if (
    btn0_2.value === btn1_2.value &&
    btn1_2.value === btn2_2.value &&
    btn0_2.value !== ""
  ) {
    return true;
  }

  //comprobamos en diagonal  \
  /*
    [0_0][0_1][0_2]
    [1_0][1_1][1_2]
    [2_0][2_1][2_2]
    */

  if (
    btn0_0.value === btn1_1.value &&
    btn1_1.value === btn2_2.value &&
    btn0_0.value !== ""
  ) {
    return true;
  }
  //comprobamos en diagonal  /
  /*
    [0_0][0_1][0_2]
    [1_0][1_1][1_2]
    [2_0][2_1][2_2]
    */

  if (
    btn2_0.value === btn1_1.value &&
    btn1_1.value === btn0_2.value &&
    btn2_0.value !== ""
  ) {
    return true;
  }

  return false;
}
function Reset() {}

function Limpiar() {
  btn0_0.value = "";
  btn0_1.value = "";
  btn0_2.value = "";
  btn1_0.value = "";
  btn1_1.value = "";
  btn1_2.value = "";
  btn2_0.value = "";
  btn2_1.value = "";
  btn2_2.value = "";

  btn0_0.classList.remove("btnX", "btnO");
  btn0_1.classList.remove("btnX", "btnO");
  btn0_2.classList.remove("btnX", "btnO");
  btn1_0.classList.remove("btnX", "btnO");
  btn1_1.classList.remove("btnX", "btnO");
  btn1_2.classList.remove("btnX", "btnO");
  btn2_0.classList.remove("btnX", "btnO");
  btn2_1.classList.remove("btnX", "btnO");
  btn2_2.classList.remove("btnX", "btnO");
}
