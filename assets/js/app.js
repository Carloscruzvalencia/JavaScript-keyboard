// Add event listener on keydown
list = [];

document.addEventListener('keydown', (event) => {
    // Variable que optiene el valor de la tecla presionada
    var name = event.key;
    console.log(name);
    list.push(name);

    // comprueba la si la tecla presionada es la indicada
    // Eliminamos las , de la lista
    var string = list.join("");
    // pasamos el valor de la lista a el input text
    document.querySelector('input[name="input-text"]').value = string;

// // first key-block ===============================================================
//     if (name == 'º') {
//         document.getElementById("key-º").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-º").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '1') {
//         document.getElementById("key-1").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-1").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '2') {
//         document.getElementById("key-2").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-2").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '3') {
//         document.getElementById("key-3").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-3").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '4') {
//         document.getElementById("key-4").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-4").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '5') {
//         document.getElementById("key-5").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-5").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '6') {
//         document.getElementById("key-6").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-6").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '7') {
//         document.getElementById("key-7").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-7").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '8') {
//         document.getElementById("key-8").classList.add("activeKey");
//         setTimeout(function () {
//             document.getElementById("key-8").classList.remove("activeKey");
//         }, 200);
//     }
//     if (name == '9') {

//         // Cambia el fondo de la tecla presionada y el borde
//         document.getElementById("key-9").style.border = "white solid";
//         document.getElementById("key-9").style.background = "#48b7d0";
//         document.getElementById("key-9").style.boxShadow = "none";

//         // despues de un segundo cambia el fondo y el borde a su valor original
//         setTimeout(function () {
//             document.getElementById("key-9").style.border = "black solid";
//             document.getElementById("key-9").style.background = "#108fab";
//             document.getElementById("key-9").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//         }, 100);
//     }
//     if (name == '0') {

//         // Cambia el fondo de la tecla presionada y el borde
//         document.getElementById("key-0").style.border = "white solid";
//         document.getElementById("key-0").style.background = "#48b7d0";
//         document.getElementById("key-0").style.boxShadow = "none";

//         // despues de un segundo cambia el fondo y el borde a su valor original
//         setTimeout(function () {
//             document.getElementById("key-0").style.border = "black solid";
//             document.getElementById("key-0").style.background = "#108fab";
//             document.getElementById("key-0").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//         }, 100);
//     }
//     // TODO - Areglar el funcionamiento de la tecla
//     if (list == "'" || name == "?") {

//         // Cambia el fondo de la tecla presionada y el borde
//         document.getElementById("key-?").style.border = "white solid";
//         document.getElementById("key-?").style.background = "#48b7d0";
//         document.getElementById("key-?").style.boxShadow = "none";

//         // despues de un segundo cambia el fondo y el borde a su valor original
//         setTimeout(function () {
//             document.getElementById("key-?").style.border = "black solid";
//             document.getElementById("key-?").style.background = "#108fab";
//             document.getElementById("key-?").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//         }, 100);
//     }
//     if (name == '¡' || name =="¿") {

//         // Cambia el fondo de la tecla presionada y el borde
//         document.getElementById("key-¿").style.border = "white solid";
//         document.getElementById("key-¿").style.background = "#48b7d0";
//         document.getElementById("key-¿").style.boxShadow = "none";

//         // despues de un segundo cambia el fondo y el borde a su valor original
//         setTimeout(function () {
//             document.getElementById("key-¿").style.border = "black solid";
//             document.getElementById("key-¿").style.background = "#108fab";
//             document.getElementById("key-¿").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//         }, 100);
//     }
//     // TODO - Areglar el funcionamiento de la tecla
//     if (name == 'Backspace') {

//         // Cambia el fondo de la tecla presionada y el borde
//         document.getElementById("key-delete").style.border = "white solid";
//         document.getElementById("key-delete").style.background = "#48b7d0";
//         document.getElementById("key-delete").style.boxShadow = "none";

//         // despues de un segundo cambia el fondo y el borde a su valor original
//         setTimeout(function () {
//             document.getElementById("key-delete").style.border = "black solid";
//             document.getElementById("key-delete").style.background = "#108fab";
//             document.getElementById("key-delete").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//         }, 100);
//     }
// // end of first key-block ======================================================================================

// // start of second key-block =====================================================================================
// if (name == 'Tab') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-tab").style.border = "white solid";
//     document.getElementById("key-tab").style.background = "#48b7d0";
//     document.getElementById("key-tab").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-tab").style.border = "black solid";
//         document.getElementById("key-tab").style.background = "#108fab";
//         document.getElementById("key-tab").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'q') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-q").style.border = "white solid";
//     document.getElementById("key-q").style.background = "#48b7d0";
//     document.getElementById("key-q").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-q").style.border = "black solid";
//         document.getElementById("key-q").style.background = "#108fab";
//         document.getElementById("key-q").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'w') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-w").style.border = "white solid";
//     document.getElementById("key-w").style.background = "#48b7d0";
//     document.getElementById("key-w").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-w").style.border = "black solid";
//         document.getElementById("key-w").style.background = "#108fab";
//         document.getElementById("key-w").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'e') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-e").style.border = "white solid";
//     document.getElementById("key-e").style.background = "#48b7d0";
//     document.getElementById("key-e").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-e").style.border = "black solid";
//         document.getElementById("key-e").style.background = "#108fab";
//         document.getElementById("key-e").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'r') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-r").style.border = "white solid";
//     document.getElementById("key-r").style.background = "#48b7d0";
//     document.getElementById("key-r").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-r").style.border = "black solid";
//         document.getElementById("key-r").style.background = "#108fab";
//         document.getElementById("key-r").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 't') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-t").style.border = "white solid";
//     document.getElementById("key-t").style.background = "#48b7d0";
//     document.getElementById("key-t").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-t").style.border = "black solid";
//         document.getElementById("key-t").style.background = "#108fab";
//         document.getElementById("key-t").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'y') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-y").style.border = "white solid";
//     document.getElementById("key-y").style.background = "#48b7d0";
//     document.getElementById("key-y").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-y").style.border = "black solid";
//         document.getElementById("key-y").style.background = "#108fab";
//         document.getElementById("key-y").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'u') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-u").style.border = "white solid";
//     document.getElementById("key-u").style.background = "#48b7d0";
//     document.getElementById("key-u").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-u").style.border = "black solid";
//         document.getElementById("key-u").style.background = "#108fab";
//         document.getElementById("key-u").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'i') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-i").style.border = "white solid";
//     document.getElementById("key-i").style.background = "#48b7d0";
//     document.getElementById("key-i").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-i").style.border = "black solid";
//         document.getElementById("key-i").style.background = "#108fab";
//         document.getElementById("key-i").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'o') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-o").style.border = "white solid";
//     document.getElementById("key-o").style.background = "#48b7d0";
//     document.getElementById("key-o").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-o").style.border = "black solid";
//         document.getElementById("key-o").style.background = "#108fab";
//         document.getElementById("key-o").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == 'p') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-p").style.border = "white solid";
//     document.getElementById("key-p").style.background = "#48b7d0";
//     document.getElementById("key-p").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-p").style.border = "black solid";
//         document.getElementById("key-p").style.background = "#108fab";
//         document.getElementById("key-p").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// // TODO - arreglar el funcionamiento de la tecla 
// if (name == 'Dead') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-^").style.border = "white solid";
//     document.getElementById("key-^").style.background = "#48b7d0";
//     document.getElementById("key-^").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-^").style.border = "black solid";
//         document.getElementById("key-^").style.background = "#108fab";
//         document.getElementById("key-^").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// if (name == '+') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-+").style.border = "white solid";
//     document.getElementById("key-+").style.background = "#48b7d0";
//     document.getElementById("key-+").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-+").style.border = "black solid";
//         document.getElementById("key-+").style.background = "#108fab";
//         document.getElementById("key-+").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// // TODO - arreglar el funcionamiento de la tecla
// if (name == 'Enter') {

//     // Cambia el fondo de la tecla presionada y el borde
//     document.getElementById("key-enter").style.border = "white solid";
//     document.getElementById("key-enter").style.background = "#48b7d0";
//     document.getElementById("key-enter").style.boxShadow = "none";

//     // despues de un segundo cambia el fondo y el borde a su valor original
//     setTimeout(function () {
//         document.getElementById("key-enter").style.border = "black solid";
//         document.getElementById("key-enter").style.background = "#108fab";
//         document.getElementById("key-enter").style.boxShadow = "-0.2vw 0.3vw 0vw #000";

//     }, 100);
// }
// var get = document.getElementById("key-");
// console.error(get);
// // end of second key row
}, false);
// 448