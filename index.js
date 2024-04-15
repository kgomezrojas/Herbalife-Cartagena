// function mostrarMenu(){
//     var encendido ="on"
//     
//         barraNav[0].style.display="none";
//         barraNav[1].style.display="none";
//         barraNav[2].style.display="none";
//         barraNav[3].style.display="none";
//         barraNav[4].style.display="none";
//         encendido="on"; 
const menuIMG= document.getElementById("menuPhone");
const CerrarMenuIMG = document.getElementById("cerrarMenu");

    function mostrarMenu(){

    
            var barraNav = document.querySelectorAll('.navegador');
            apagar=false;
        barraNav[0].style.display="block";
        barraNav[1].style.display="block";
        barraNav[2].style.display="block";
        barraNav[3].style.display="block";
        barraNav[4].style.display="block";
        menuIMG.style.display="none";
        CerrarMenuIMG.style.display="inline";
        
        }
    CerrarMenuIMG.addEventListener('click',OcultarMenu);
    function OcultarMenu(){
       
            var barraNav = document.querySelectorAll('.navegador');
            apagar=true;
        barraNav[0].style.display="none";
        barraNav[1].style.display="none";
        barraNav[2].style.display="none";
        barraNav[3].style.display="none";
        barraNav[4].style.display="none";
        menuIMG.style.display="block"
        CerrarMenuIMG.style.display="none";
    }

const logoIMG = document.querySelectorAll('.logo');
logoIMG[0].addEventListener('click',()=>{
    window.location.href="./index.html";
})