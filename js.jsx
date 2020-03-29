
var hoja = document.getElementById("myCanvas");
var ctx = hoja.getContext('2d');
var medida = hoja.getBoundingClientRect();
var color = "black", dibujando = false,  range = 1, x = 0, y = 0;

function defColor(c){
    color = c; 
}

function defRange(r){
range = r;
}

hoja.addEventListener('mousedown',function (s){
    x= s.clientX - medida.left ;
    y = s.clientY - medida.top;
    dibujando = true;

})

hoja.addEventListener('mousemove', function (s){
    if (dibujando === true) {
    dibujar( x, y , s.clientX - medida.left, s.clientY - medida.top);
    x =  s.clientX - medida.left;
    y =  s.clientY - medida.top;
    }
})

hoja.addEventListener('mouseup', function (s){

    dibujar( x, y , s.clientX - medida.left, s.clientY - medida.top);

    x = 0;
    y = 0;
    dibujando = false;
    
})

function dibujar(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.strokeStyle =color;
    ctx.lineWidth = range;
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}