/*
    Feito por : Eduardo Ferreira Constantino
                Pedro Lucca Golçalves de Araujo
*/

const myOberver = new IntersectionObserver( (entries) =>{ /* variavel para criar um observador para alguma classe no caso a Hidden*/
    entries.forEach( (entry) => { /* A cada elemento que estiver na tela ele aparece com a classe do css(animação) */
      if (entry.isIntersecting){
        entry.target.classList.add("show") /*adiciona a classe do css com o efeito de aparição*/
      }else{
        entry.target.classList.remove("show") /* Se o elemento não estiver na tela ele remove a classe de css*/
      }
    })
  })
  
  const elements = document.querySelectorAll('.hidden') /*variavel elements seleciona todos os itens com a classe Hidden*/ 
  
  elements.forEach( (element) => myOberver.observe(element) ) /*como tem muitos itens com a classe hidden ele vê cada item de uma vez*/ 