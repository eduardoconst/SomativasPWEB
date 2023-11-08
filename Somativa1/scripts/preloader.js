/*
    Feito por : Eduardo Ferreira Constantino
                Pedro Lucca Golçalves de Araujo
*/

let elem_preloader = document.getElementById("preloader"); /*Procura o elemento do id preloader*/
let elem_loader = document.getElementById("loader"); /*Procura o elemento do id loader*/
console.log("Testing... Ok"); /* Manda um log no console de "Testing... OK"*/

setTimeout(function() { /* Tem um time de 1.5 segundos no css e 1.2 aqui*/
  elem_preloader.classList.remove("preloader"); /* Depois de 1.2s remove o preloader que esta no css */
  elem_loader.classList.remove("loader"); /* Depois de 1.2s remove a loader que esta no css*/
  }, 1280); /* Define quantos seguntos será o timeout */