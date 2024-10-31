let btnmenu = document.getElementById('abrirmenu')
let menu = document.getElementById('menumobile')
let overlay = document.getElementById('overlaymenu')

btnmenu.addEventListener('click', ()=> {
    menu.classList.add('abrirmenu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrirmenu')
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrirmenu')
})

let trilho = document.getElementById('trilho')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.getElementById('div4')
let div5 = document.getElementById('div5')
let div6 = document.getElementById('div6')
let div7 = document.getElementById('div7')
let div8 = document.getElementById('div8')
let div9 = document.getElementById('div9')
let header = document.querySelector('header')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    div1.classList.toggle('dark')
    div2.classList.toggle('dark')
    div3.classList.toggle('dark')
    div4.classList.toggle('dark')
    div5.classList.toggle('dark')
    div6.classList.toggle('dark')
    div7.classList.toggle('dark')
    div8.classList.toggle('dark')
    div9.classList.toggle('dark')
    header.classList.toggle('dark')
    body.classList.toggle('dark')
})

let hidden = document.querySelectorAll('.hidden')

let myobserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show')
    }else {
        entry.target.classList.remove('show')
    }
})
})

hidden.forEach( (element) => myobserver.observe(element))


