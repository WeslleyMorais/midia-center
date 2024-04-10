function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //troca imaagem
  const profileImg = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    profileImg.setAttribute("src", "./assets/assets/Avatar-2.png")
  } else {
    profileImg.setAttribute("src", "./assets/assets/Avatar.png")
  }

  const logoImg = document.querySelector("#logo img")

  if (html.classList.contains("light")) {
    logoImg.setAttribute("src", "./assets/assets/logo-texto-e-imagem-3-1.png")
  } else {
    logoImg.setAttribute("src", "./assets/assets/logo-texto-e-imagem-3.png")
  }
}