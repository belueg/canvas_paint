var c = document.getElementById("myCanvas");
var elegirColor = document.getElementById("colores");
var borrador = document.getElementById("borrar");
var lienzo = c.getContext("2d");
var coorCanvas = c.getBoundingClientRect();
var x =0;
var y =0; 
var dibujandoConMousePresionado = false;
var color; 

function eleccionColor () {
  color = elegirColor.value;
  console.log(color)

}  

function generarGradiente (){
    var grd = lienzo.createLinearGradient(0,0,300,0);
}

function borrando () {
    lienzo.clearRect(0,0,500,500);
}  

/* >>>>>> EVENT LISTENERS <<<<<< */

document.addEventListener("mousedown", empezarAdibujar);
document.addEventListener("mousemove", dibujando);
document.addEventListener("mouseup", dejarDeDibujar );
elegirColor.addEventListener("input", eleccionColor)
borrador.addEventListener("click", borrando)



/* >>>>>>> DIBUJO <<<<<<<<< */

function dibujar(x1 , y1 , x2  , y2 ){
    
    lienzo.beginPath()
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(x1,y1)
    lienzo.lineTo(x2,y2)
    lienzo.stroke()    
    lienzo.closePath();
}    




function empezarAdibujar(mdown){

    
    x = mdown.clientX - coorCanvas.left;
    y = mdown.clientY - coorCanvas.top; 
  
    dibujandoConMousePresionado = true;


}



function dibujando(mmove){

if (dibujandoConMousePresionado === true) {
    
  
    dibujar(x, y, mmove.clientX - coorCanvas.left,  mmove.clientY - coorCanvas.top);
    
    x = mmove.clientX - coorCanvas.left;
    y = mmove.clientY - coorCanvas.top; 
    
}

}

function dejarDeDibujar () {

        dibujandoConMousePresionado = false; 
        
        x= 0;
        y= 0;

  

}




