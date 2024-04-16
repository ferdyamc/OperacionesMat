let cajaDeTexto = document.getElementById("input");

function concatenarTexto(e){
    cajaDeTexto.value += e.target.textContent;
}

function eliminarUltimoCaracter() {
    cajaDeTexto.value = cajaDeTexto.value.slice(0, -1);
}

function resultado(){
    cajaDeTexto.value = eval(cajaDeTexto.value);
}

function limpiarcampo(){
    cajaDeTexto.value="";
}