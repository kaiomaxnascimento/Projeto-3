$('.capas').slick({
  infinite: false,
  slidesToShow: 9,
  swipeToSlide: true,
});


$('.back-logos').slick({
  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  fade: true,
  speed: 800,
  pauseOnHover: false,
  swiper: false
});


$('.sobre-filme').slick({
  infinite: true,
  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  speed: 800,
  swipe: false,
  fade:true,
  pauseOnHover: false
 });


let select = $(".select");

select.on('click', function() {

  select.removeClass('open')
  $(this).addClass('open');

})


const butMenu = document.querySelector('.butt-mob')

function atvMenu(event) {
  const nav = document.querySelector('.menu')
  nav.classList.toggle('active')
}

butMenu.addEventListener('click', atvMenu)