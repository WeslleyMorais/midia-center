function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //troca imaagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/Avatar-2.png")
  } else {
    img.setAttribute("src", "./assets/assets/Avatar.png")
  }

  const img = document.querySelector("#logo img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/logo-texto-e-imagem-3-1.png")
  } else {
    img.setAttribute("src", "./assets/assets/logo-texto-e-imagem-3.png")
  }
}
