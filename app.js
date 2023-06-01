// var diaSemana = prompt("Ingresa un día de la semana en minúsculas:");

// if (diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miércoles" || diaSemana === "jueves" || diaSemana === "viernes") {
//   alert("Es un día laboral");
// } else if (diaSemana === "sábado" || diaSemana === "domingo") {
//   alert("Es un día de descanso");
// } else {
//   alert("Eso no es un día de la semana válido");
// }

var diaSemana = prompt("Ingresa un día de la semana en minúsculas:");

switch (diaSemana) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
    alert("Se agarra la pala");
    break;
  case "viernes":
    alert("Me la doy en la PERAAAAA");
    break;
  case "sábado":
    alert("Es un día de descanso");
    break;
  case "domingo":
    alert("zzz");
    break;
  default:
    alert("Eso no es un día de la semana válido");
    break;
}