let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar')
let lightsaber = document.querySelector('#lightsaber')
let collapse = document.querySelector('#collapse')
let check = false;

console.log(lightsaber);


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height = '70px';
        links.forEach( (link)=>{
            link.style.color = 'var(--black)';
        } )
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-b.png';
        lightsaber.src = 'http://127.0.0.1:5500/media/lightsaber-b.png';
        
    }else{
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-yellow');
        collapse.classList.add('bg-black');
        collapse.classList.remove('bg-yellow');
        navbar.style.height = '140px';
        links.forEach( (link)=>{
            link.style.color = 'var(--yellow)';
        } )
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-y.png';
        lightsaber.src = 'http://127.0.0.1:5500/media/lightsaber-y.png';
    }
});

lightsaber.addEventListener('click', ()=>{
    if(check == false){
        lightsaber.style.transform = `rotate(-90deg)`
        check = true;
    }else{
        lightsaber.style.transform = `rotate(0deg)`
        check = false;
    }
})



// Chiamate Asincrone
// setInterval(): crea un loop infinito in cui possiamo gestire la durata delle singole interazioni
// Il setInterval e' una funzione che vuole due parametri. il primo parametro e' la callback. Il secondo e' l'intervallo di tempo che deve passare tra 1 iterazione e l'altra.
// clearInterval(): pulire un intervallo
// setTimeout: Fa partire un blocco di istruzioni dopo tot secondi

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time) {
    let counter = 0;
    
    let interval = setInterval(() => {
        if(counter < n){
            counter ++
            element.innerHTML = counter; 
        }else {
            console.log('adesso mi fermo');
            clearInterval(interval);
        }
    }, time);
    
    
    setTimeout(() => {
        confirm = true;
    }, 8000);
    
}



// IntersectionObserver: e' una Classe del browser che si occupa di far scattare una funzione nel momento in cui sul browser sono visibili gli elementi HTML che noi gli indichiamo
// new: keyword che mi permette di GENERARE UN OGGETTO partendo da una classe
// Nella variabile stiamo creando un oggetto di classe InterserctionObserver
// In questo oggetto scatta una Callback la quale accetta un qualsiasi numero di parametri e li salva nel parametro formale entries che e' un array

let observer = new  IntersectionObserver( (entries)=> {
    
    entries.forEach((entry)=> {
        
        if(entry.isIntersecting && confirm){
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 20);
            confirm = false;
        }
        
    });
    
} );


observer.observe(firstNumber);


let reviews = [
    {user: 'Matteo', description: `Il piu' bel sito di annunci del mondo`, rank: 5},
    {user: 'Alin', description: `Veramente non mi da di niente`, rank: 1}, 
    {user: 'Michael', description: `Mi piace tranne per Star Trek`, rank: 3}, 
    {user: 'Arina', description: `Star Wars e' meglio!`, rank: 5}, 
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recenzione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `                        
        <div class="card-review">
            <p class="lead text-center">${recenzione.description}</p>
            <p class="h4 text text-center">${recenzione.user}</p>
            <div class="d-flex justify-content-center star">
    
            </div>
            
        </div>`;
    swiperWrapper.appendChild(div);
    
});

let stars = document.querySelectorAll('.star');

// <i class="fa-solid fa-star"></i>

stars.forEach((star, index)=>{
    for(let i = 1; i <= reviews[index].rank; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid','fa-star');
        star.appendChild(icon);
    }
    
    let difference = 5 - reviews[index].rank;
    
    for(let i = 1; i <= difference; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular','fa-star');
        star.appendChild(icon);
    }
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        loop: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
});