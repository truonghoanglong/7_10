const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded',function(){
    const play = $('.play')
    const trailer = $('.trailer')
    const vid = $('.vid')
    play.addEventListener('click', function(){
        trailer.classList.add('active')
        vid.pause();
    },false)

    const close= $('.close')
    close.addEventListener('click', function(){
        trailer.classList.remove('active')
        vid.pause();
    },false)
    

},false)



