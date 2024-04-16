let estado = 0, 
aside = document.getElementById("contenedor-menu"), 
btn = document.getElementById("btn-menu").addEventListener('click', () =>{
    if(estado == 0){
        aside.style.width="60px";
        estado=1;
    }else{
        aside.style.width="250px";
        estado=0; 
    }
})
