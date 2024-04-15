var encabezadoProduct = document.getElementById("tittleProducto");
const seccion = {
    NutricionSec:document.getElementById("NutricionContainer"),
    SaludybellezaSec:document.getElementById("SaludyBellezaContainer"),
    CatalogoSec:document.getElementById("CatalogoContainer")
}
seccion.NutricionSec.style.display="none";
seccion.SaludybellezaSec.style.display="none";
seccion.CatalogoSec.style.display="none";
var secciondeVenta = document.getElementById("productosSec");
function Nutricion(){
    encabezadoProduct.innerHTML="Nutrición";
    seccion.NutricionSec.style.display="inline";
    seccion.SaludybellezaSec.style.display="none";
    seccion.CatalogoSec.style.display="none";
    // window.scrollTo(0, window.scrollY + 500);
    secciondeVenta.scrollIntoView();
}
function SaludyBelleza(){
    encabezadoProduct.innerHTML="Salud Y Belleza";
    seccion.NutricionSec.style.display="none";
    seccion.SaludybellezaSec.style.display="inline";
    seccion.CatalogoSec.style.display="none";
    secciondeVenta.scrollIntoView();
}
function Catalogo(){
    encabezadoProduct.innerHTML="Todos los Productos";
    seccion.NutricionSec.style.display="inline";
    seccion.SaludybellezaSec.style.display="inline";
    seccion.CatalogoSec.style.display="inline";
    secciondeVenta.scrollIntoView();
}

       

const botonComprar = document.querySelectorAll('.buyBoton');
const nombre = document.querySelectorAll('.nameProduct');


botonComprar[0].addEventListener('click',()=>{
    let nombreProducto = nombre[0].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[1].addEventListener('click',()=>{
    let nombreProducto = nombre[1].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[2].addEventListener('click',()=>{
    let nombreProducto = nombre[2].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[3].addEventListener('click',()=>{
    let nombreProducto = nombre[3].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[4].addEventListener('click',()=>{
    let nombreProducto = nombre[4].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[5].addEventListener('click',()=>{
    let nombreProducto = nombre[5].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[6].addEventListener('click',()=>{
    let nombreProducto = nombre[6].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[7].addEventListener('click',()=>{
    let nombreProducto = nombre[7].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})
botonComprar[8].addEventListener('click',()=>{
    let nombreProducto = nombre[8].innerHTML;
    const cantidad = (prompt("Cuantas unidades desea llevar?"));
    window.location.href="https://api.whatsapp.com/send?phone=573207055887&text=hola%20vengo%20de%20su%20Pagina%20web%20y%20Quiero%20Comprar%20*"+cantidad+"*%20unidades%20de%20*"+nombreProducto+"*";
})

