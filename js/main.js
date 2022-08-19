let btncontainer = document.querySelector(".rating-state__bnt-container");
let optionSelected = document.querySelector(".thanyou-state__result--option");
let submitBtn = document.querySelector(".rating-state__submit");
let tarjeta1 = document.querySelector(".rating-state");
let tarjeta2 = document.querySelector(".thanyou-state");

btncontainer.addEventListener("click", e => {
    // con e vemos el evento y asi poder observar las propiedades y detalles del evento.
    // se almacena en una variable de funcion.    
    let numberSelected = e.target.innerText;
    // se escribe el valor seleccionado en el span de la segunda targeta.
    optionSelected.innerText = numberSelected;
    // mostrar segunda targeta
   if(numberSelected > 0 || numberSelected<=5){
    submitBtn.addEventListener("click", ()=>{
        tarjeta1.style.display = 'none';
        tarjeta2.style.display = 'flex';
    });
    };

});

    