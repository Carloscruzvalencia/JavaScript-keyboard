// Add event listener on keydown
list = [];

document.addEventListener('keydown', (event) => {
    // Variable que optiene el valor de la tecla presionada
    var name = event.key;
    list.push(name);

    // comprueba la si la tecla presionada es la indicada
    // if (name == 'a' || name == 'A') {

    //     // Cambia el fondo de la tecla presionada y el borde
    //     document.getElementById("key-a").style.border = "white solid";
    //     document.getElementById("key-a").style.background = "#48b7d0";

    //     // despues de un segundo cambia el fondo y el borde a su valor original
    //     setTimeout(function () {
    //         document.getElementById("key-a").style.border = "black solid";
    //         document.getElementById("key-a").style.background = "#108fab";
    //     }, 100);

    // }
    // Eliminamos las , de la lista
    var string = list.join("");
    // pasamos el valor de la lista a el input text
    document.querySelector('input[name="input-text"]').value = string;
}, false);