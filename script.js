const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://i.ibb.co/KN7PX6p/c53f60a4b9b160ffa3e79fbcbfb4e2a4.gif" alt="" />'
  title.innerHTML = 'Vini - O 8.º Passageiro'
  excerpt.innerHTML =
    'Lembre-se, eu sou feito de carne humana; nada humano me é estranho.'
  profile_img.innerHTML =
    '<img src="https://i.ibb.co/xGtHMkT/001.png" alt="" />'
  name.innerHTML = '@vasijess'
  date.innerHTML = 'May 01, 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
