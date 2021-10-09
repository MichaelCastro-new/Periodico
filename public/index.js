
let anim = gsap.from('#texto-h2',{
    duration: .2,
    x: -200,
    scale: 0,
    stagger: 0.5,
    delay: 3
})

window.addEventListener('load', () => {
    setTimeout(remove, 2000);
    function remove(){
        document.getElementById("loader").classList.toggle("loader2")
    }
})

window.addEventListener('load', () => {
    let fecha = document.getElementById('fecha');
    var f = new Date();
    fecha.textContent = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
})

let arr = []
for ( var i = 1; i <= 4; i++){
    let ir = document.getElementById(`vista-${i}`)
    arr.push(ir)
}

arr[0].addEventListener('click', () => {
    window.open ('https://www.elespectador.com/noticias/politica/la-lucha-por-la-reforma-agraria/')
})
arr[1].addEventListener('click', () => {
    window.open('https://www.elespectador.com/noticias/politica/cincuenta-anos-de-la-anuc/')
})
arr[2].addEventListener('click', () => {
    window.open('https://www.eltiempo.com/archivo/documento/MAM-653624')
})
arr[3].addEventListener('click', () => {
    window.open('https://www.eltiempo.com/archivo/documento/MAM-217927')
})


const typed = new Typed('.typeds', {
    strings: [
        'Reforma Agraria',
        '35 Años De Reforma Agraria',
        'Movimiento Campesino'
    ],
	typeSpeed: 100, 
	startDelay: 300, 
	backSpeed: 76, 
	smartBackspace: true, 
	shuffle: false,
	backDelay: 1600,
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
})


let slider = document.querySelector(".slider-contenedor");
let sliderInd = document.querySelectorAll(".contenido-slaider");
let contador = 1;
let width = sliderInd[0].clientWidth;
let intervalo = 3000;
let btn2 = document.getElementById('btn');
let btn = document.getElementById('btn-2');

window.addEventListener("resize", function(){
	width = sliderInd[0].clientWidth;
})

btn2.addEventListener('click', slides_rig);

function slides_rig() {
    slider.style.transform = "translate("+(width/200)+"px)";
	slider.style.transition = "transform .8s";
}


btn.addEventListener('click', slides);

function slides (){
    slider.style.transform = "translate("+(-width)+"px)";
    // slider.style.transform = "translate("+(-900)+"px)";
	slider.style.transition = "transform .8s";
}
