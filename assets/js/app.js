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

    document.getElementById("lastLetter").innerHTML = name;





    // first key-block ===============================================================
    if (name == 'º') {
        document.getElementById("key-º").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-º").classList.remove("activeKey");
        }, 200);
    }
    if (name == '1') {
        document.getElementById("key-1").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-1").classList.remove("activeKey");
        }, 200);
    }
    if (name == '2') {
        document.getElementById("key-2").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-2").classList.remove("activeKey");
        }, 200);
    }
    if (name == '3') {
        document.getElementById("key-3").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-3").classList.remove("activeKey");
        }, 200);
    }
    if (name == '4') {
        document.getElementById("key-4").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-4").classList.remove("activeKey");
        }, 200);
    }
    if (name == '5') {
        document.getElementById("key-5").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-5").classList.remove("activeKey");
        }, 200);
    }
    if (name == '6') {
        document.getElementById("key-6").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-6").classList.remove("activeKey");
        }, 200);
    }
    if (name == '7') {
        document.getElementById("key-7").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-7").classList.remove("activeKey");
        }, 200);
    }
    if (name == '8') {
        document.getElementById("key-8").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-8").classList.remove("activeKey");
        }, 200);
    }
    if (name == '9') {
        document.getElementById("key-9").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-9").classList.remove("activeKey");
        }, 200);
    }
    if (name == '0') {
        document.getElementById("key-0").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-0").classList.remove("activeKey");
        }, 200);
    }
    // TODO - Areglar el funcionamiento de la tecla
    if (list == "'" || name == "?") {
        document.getElementById("key-?").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-?").classList.remove("activeKey");
        }, 200);
    }
    if (name == '¡' || name == "¿") {
        document.getElementById("key-¿").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-¿").classList.remove("activeKey");
        }, 200);
    }
    // TODO - Areglar el funcionamiento de la tecla
    if (name == 'Backspace') {
        document.getElementById("key-delete").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-delete").classList.remove("activeKey");
        }, 200);
    }
    // end of first key-block ======================================================================================

    // start of second key-block =====================================================================================
    if (name == 'Tab') {
        document.getElementById("key-tab").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-tab").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'q' || name == 'Q') {
        document.getElementById("key-q").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-q").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'w' || name == 'W') {
        document.getElementById("key-w").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-w").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'e' || name == 'E') {
        document.getElementById("key-e").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-e").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'r' || name == 'R') {
        document.getElementById("key-r").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-r").classList.remove("activeKey");
        }, 200);
    }
    if (name == 't' || name == 'T') {
        document.getElementById("key-t").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-t").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'y' || name == 'Y') {
        document.getElementById("key-y").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-y").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'u' || name == 'U') {
        document.getElementById("key-u").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-u").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'i' || name == 'I') {
        document.getElementById("key-i").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-i").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'o' || name == 'O') {
        document.getElementById("key-o").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-o").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'p' || name == 'P') {
        document.getElementById("key-p").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-p").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla 
    if (name == 'Dead') {
        document.getElementById("key-^").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-^").classList.remove("activeKey");
        }, 200);
    }
    if (name == '+') {
        document.getElementById("key-+").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-+").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla
    if (name == 'Enter') {
        document.getElementById("key-enter").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-enter").classList.remove("activeKey");
        }, 200);
    }
    // end of second key row
    // start of third key row
    if (name == 'CapsLock') {
        document.getElementById("key-may").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-may").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'a' || name == 'A') {
        document.getElementById("key-a").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-a").classList.remove("activeKey");
        }, 200);
    }
    if (name == 's' || name == 'S') {
        document.getElementById("key-s").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-s").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'd' || name == 'D') {
        document.getElementById("key-d").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-d").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'f' || name == 'F') {
        document.getElementById("key-f").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-f").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'g' || name == 'G') {
        document.getElementById("key-g").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-g").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'h' || name == 'H') {
        document.getElementById("key-h").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-h").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'j' || name == 'J') {
        document.getElementById("key-j").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-j").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'k' || name == 'K') {
        document.getElementById("key-k").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-k").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'l' || name == 'L') {
        document.getElementById("key-l").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-l").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'ñ' || name == 'Ñ') {
        document.getElementById("key-ñ").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-ñ").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla
    if (name == 'Dead') {
        document.getElementById("key-").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'ç' || name == 'Ç') {
        document.getElementById("key-ç").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-ç").classList.remove("activeKey");
        }, 200);
    }
    // end of third key row
    // start of fourth key row
    if (name == 'Shift') {
        document.getElementById("key-shift").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-shift").classList.remove("activeKey");
        }, 200);
    }
    if (name == '<') {
        document.getElementById("key-<").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-<").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'z') {
        document.getElementById("key-z").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-z").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'x') {
        document.getElementById("key-x").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-x").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'c') {
        document.getElementById("key-c").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-c").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'v') {
        document.getElementById("key-v").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-v").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'b') {
        document.getElementById("key-b").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-b").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'n') {
        document.getElementById("key-n").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-n").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'm') {
        document.getElementById("key-m").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-m").classList.remove("activeKey");
        }, 200);
    }
    if (name == ',') {
        document.getElementById("key-,").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-,").classList.remove("activeKey");
        }, 200);
    }
    if (name == '.') {
        document.getElementById("key-.").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-.").classList.remove("activeKey");
        }, 200);
    }
    if (name == '-') {
        document.getElementById("key--").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key--").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla
    if (name == 'Shift') {
        document.getElementById("key-shift").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-shift").classList.remove("activeKey");
        }, 200);
    }
    // end of fourth key row
    // start of fifth key row
    if (name == 'Control') {
        document.getElementById("key-ctrl").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-ctrl").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla
    if (name == 'function') {
        document.getElementById("key-fn").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-fn").classList.remove("activeKey");
        }, 200);
    }

    if (name == 'Alt') {
        document.getElementById("key-alt").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-alt").classList.remove("activeKey");
        }, 200);
    }
    if (name == ' ') {
        document.getElementById("key-space").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-space").classList.remove("activeKey");
        }, 200);
    }
    // TODO - arreglar el funcionamiento de la tecla
    if (name == 'AltGraph') {
        document.getElementById("key-altgr").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-altgr").classList.remove("activeKey");
        }, 200);
    }
    if (name == 'Control') {
        document.getElementById("key-ctrl").classList.add("activeKey");
        setTimeout(function () {
            document.getElementById("key-ctrl").classList.remove("activeKey");
        }, 200);
    }
}, false);
// 448