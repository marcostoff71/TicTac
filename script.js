document.getElementById("btnHelp").addEventListener("click", (e) => {
  Swal.fire("Gana el que complete 5 puntos");
});
let cbxTipoJuego = document.getElementById("selectJugador");
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
let lblNombreJ1 = document.getElementById("lblNombreJ1");
let lblNombreJ2 = document.getElementById("lblNombreJ2");
let lblTurno = document.getElementById("lblTurno");
let lblpuntosJ1 = document.getElementById("lblpuntosJ1");
let lblpuntosJ2 = document.getElementById("lblpuntosJ2");

let bot = false;
let turno = 1;
let puntosJ1 = 0;
let puntosJ2 = 0;
let conCasillas = 0;
let nombreJ1 = "Jugador 1";
let nombreJ2 = "Jugador 2";

cbxTipoJuego.addEventListener("change", (e) => {
  if (cbxTipoJuego.selectedIndex == 1) {
    bot = true;
    
    txtnameJ2.setAttribute("readonly", "");
    txtnameJ2.readOnly = true;
    lblNombreJ2.textContent = "Puntos de Bot: ";
    txtnameJ2.textContent = "";
    txtnameJ2.classList.add("lectura");
    nombreJ2 = "Botsito 0.1";
    
    
  } else {
    bot = false;
    txtnameJ2.readOnly = true;
    txtnameJ2.textContent = "";
    nombreJ2 = "Jugador 2";
    lblNombreJ2.textContent = `Puntos de ${nombreJ2}: `;
    txtnameJ2.classList.remove("lectura");
    
  }
  ComprobarTurno();
  Reset();
  mostrarPuntos();
});

/*Comprobar nombre de los jugadores*/
txtnameJ1.addEventListener("keydown", (e) => {
  if (txtnameJ1.value.trim() !== "") {
    nombreJ1 = txtnameJ1.value.trim();
    lblNombreJ1.textContent = `Puntos ${nombreJ1}:`;
  } else {
    nombreJ1 = "Jugador 1";
    lblNombreJ1.textContent = `Puntos ${nombreJ1}`;
  }
  ComprobarTurno();
});

txtnameJ2.addEventListener("keypress", (e) => {
  if (txtnameJ2.value.trim() !== "") {
    nombreJ2 = txtnameJ2.value.trim();
    lblNombreJ2.textContent = `Puntos ${nombreJ2}:`;
  } else {
    nombreJ2 = "Jugador 2";
    lblNombreJ2.textContent = `Puntos ${nombreJ2}:`;
  }
  ComprobarTurno();
});

lblTurno.addEventListener("change", (e) => {
  console.log("cambie");
});
function botSito001(turno) {
  let correcto = false;
  console.log("Entre a botsito");
  do {
    let casilla = Math.floor(Math.random() * (9 - 1)) + 1;;
    switch (casilla) {
      case 1:
        if (btn0_0.value === "") {
          dibujar(btn0_0);
          correcto = true;
        }
        break;
      case 2:
        if (btn0_1.value === "") {
          dibujar(btn0_1);
          correcto = true;
        }
        break;
      case 3:
        if (btn0_2.value === "") {
          dibujar(btn0_2);
          correcto = true;
        }
        break;
      case 4:
        if (btn1_0.value === "") {
          dibujar(btn1_0);
          correcto = true;
        }
        break;
      case 5:
        if (btn1_1.value === "") {
          dibujar(btn1_1);
          correcto = true;
        }
        break;
      case 6:
        if (btn1_2.value === "") {
          dibujar(btn1_2);
          correcto = true;
        }
        break;
      case 7:
        if (btn2_0.value === "") {
          dibujar(btn2_0);
          correcto = true;
        }
        break;
      case 8:
        if (btn2_1.value === "") {
          dibujar(btn2_1);
          correcto = true;
        }
        break;
      case 9:
        if (btn2_2.value === "") {
          dibujar(btn2_2);
          correcto = true;
        }
        break;
    }
  } while (!correcto);
}

function ComprobarTurno() {
  lblTurno.textContent = turno === 1 ? nombreJ1 : nombreJ2;
}

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
    } else {
      btn.value = "O";
      btn.classList.add("btnO");
      comprobarGanador(turno);
    }
  }
  ComprobarTurno();
}

function comprobarGanador(pTurno) {
  conCasillas++;
  if (conCasillas < 9) {
    if (pTurno === 1 && gano()) {
      puntosJ1++;
      if (puntosJ1 === 5) {
        mostrarMensajeGanador(1);
        Reset();
      } else {
        mostrarMensaje(pTurno);
        Limpiar();
      }
    } else if (pTurno === 2 && gano()) {
      puntosJ2++;
      if (puntosJ2 === 5) {
        mostrarMensajeGanador(2);
        Reset();
      } else {
        mostrarMensaje(pTurno);
        Limpiar();
      }
    } else {
      turno = turno === 1 ? 2 : 1;
      if (bot) {
        if (turno === 2) {
          botSito001();
        }
      }
    }
  } else {
    mostrarEmpate();
  }
  mostrarPuntos();
}
function mostrarMensajeGanador(pTurno) {
  Swal.fire({
    title: `!!!!Felicidades Ganaste ${pTurno === 1 ? nombreJ1 : nombreJ2} ¡¡¡¡`,
    width: 600,
    padding: "3em",
    background: "#fff url(/images/trees.png)",
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    confirmButtonText: "Aceptar",
  });
}

function mostrarMensaje(turno) {
  if (turno === 1) {
    Swal.fire({
      icon: "success",
      title: `Gano ${nombreJ1} tienes ${puntosJ1} ${
        puntosJ1 == 1 ? "punto" : "puntos"
      }`,
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `Gano ${nombreJ2} tienes ${puntosJ2} ${
        puntosJ2 == 1 ? "punto" : "puntos"
      }`,
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
function mostrarPuntos() {
  lblpuntosJ1.textContent = puntosJ1.toString();
  lblpuntosJ2.textContent = puntosJ2.toString();
}
function mostrarEmpate() {
  Swal.fire({
    icon: "info",
    title: `Esto es un empate nadie se lleva puntos`,
    showConfirmButton: false,
    timer: 1000,
  });
  Limpiar();
}
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
function Reset() {
  puntosJ1 = 0;
  puntosJ2 = 0;

  Limpiar();
}

function Limpiar() {
  turno = 1;
  ComprobarTurno();
  conCasillas = 0;
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
