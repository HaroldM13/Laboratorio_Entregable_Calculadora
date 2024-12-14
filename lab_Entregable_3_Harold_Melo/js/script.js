let resultado;
let opa;
let opb;
let op;
let res;

function quitar0(){
    if(resultado.textContent == "0"){
        resultado.textContent = "";
    }
}

function iniciar(){

    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let suma = document.getElementById('sumar');
    let menos = document.getElementById('menos');
    let multiplicar = document.getElementById('multiplicar');
    let dividir = document.getElementById('dividir');
    let borrar = document.getElementById('borrar');
    let igual = document.getElementById('igual');

    resultado = document.getElementById("resultado");

    uno.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(){
        quitar0();
        resultado.textContent = resultado.textContent + "0";
    }

    suma.onclick = function(){
        opa = resultado.textContent;
        op = "+";
        limpiar();
    }

    menos.onclick = function(){
        opa = resultado.textContent;
        op = "-";
        limpiar();
    }

    multiplicar.onclick = function(){
        opa = resultado.textContent;
        op = "*";
        limpiar();
    }

    dividir.onclick = function(){
        opa = resultado.textContent;
        op = "/";
        limpiar();
    }

    igual.onclick = function(){
        opb = resultado.textContent;
        resolver();
    }

    borrar.onclick = function(){
        opa = ""
        opb = ""
        op = ""
        res = ""
        resultado.textContent = "0"
    }

}

function limpiar(){
    resultado.textContent = "";
}


function resolver(){
    opa = parseFloat(opa);
    opb = parseFloat(opb);
    switch (op) {
        case "+":
            res = opa + opb;
            break;
        case "-":
            res = opa - opb;
            break;
        case "*":
            res = opa * opb;
            break;
        case "/":
            if (opb === 0) {
                alert("No se puede dividir por cero '0'!! Valida de nuevo")
                break;
            }
            res = opa / opb;
            break;
        default:
            break;
    }

    resultado.textContent = res;
}