const nuevoitem = document.getElementById('item');
const boton = document.getElementById('agregar');
const conteniner = document.getElementById('contenedor');
const borrar = document.getElementById('limpiar');
let almacenamiento = [];

function agregar(){
 if (nuevoitem.value) almacenamiento.push(nuevoitem.value)
 localStorage.setItem('almacenar',JSON.stringify(almacenamiento));
 almacenamiento = JSON.parse(localStorage.getItem('almacenar'))
}
function mostrar (){
 conteniner.innerHTML += '<li>' + almacenamiento + '</li>';
}
boton.addEventListener ('click', ()=>{
  agregar();
  mostrar();
})


