const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded',function(){
    const video = $('.trailer')
    const play = $('.play')
    play.addEventListener('click', function(){
        video.classList.add('active');
        console.log('click')
    },false)
},false)



