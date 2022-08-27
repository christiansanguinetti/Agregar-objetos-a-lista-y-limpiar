function almacenamientoLocal() {
  const nuevoitem = document.getElementById("item");
  const boton = document.getElementById("agregar");
  const conteniner = document.getElementById("contenedor");
  const borrar = document.getElementById("limpiar");

  let almacenamiento = [];
  
  if (localStorage.getItem("almacenar")) almacenamiento = JSON.parse(localStorage.getItem("almacenar"));

  function agregar() {
    if (nuevoitem.value) almacenamiento.push(nuevoitem.value);
    localStorage.setItem("almacenar", JSON.stringify(almacenamiento));
    almacenamiento = JSON.parse(localStorage.getItem("almacenar"));
  }

  function mostrar() {
    conteniner.innerHTML +=
      "<li>" + almacenamiento[almacenamiento.length - 1] + "</li>";
  }

  boton.addEventListener("click", () => {
    agregar();
    mostrar();
    nuevoitem.value = "";
  });

  document.addEventListener("DOMContentLoaded", () => {    
    for (elemento of JSON.parse(localStorage.getItem("almacenar"))) {
      conteniner.innerHTML += "<li>" + elemento + "</li>";
    }
  });
}

almacenamientoLocal();