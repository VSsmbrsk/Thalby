$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
    navText: ['←', '→'],
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})

var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});