const botao = document.querySelector('js-theme')

const themes = {
  't-dark' : 't-light',
  't-light' : 't-dark',
}

if (botao){
  botao.addEventListener('click', event => {
    event.preventDefault()
    document.body.setAttribute('data-theme','t-dark')
    const currentTheme = document.body.dataset.currentTheme
    document.body.setAttribute('data-theme',themes[currentTheme] ||'t-light')
  })
}