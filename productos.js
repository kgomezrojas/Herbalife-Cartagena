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

botonComprar.forEach(boton => {
    boton.addEventListener('click', function RealizarCompra(){
        window.location.href = "./comprar.html";
    });
});
