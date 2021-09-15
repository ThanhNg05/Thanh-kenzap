$('.owl-carousel').owlCarousel({
    center: true,
    autoplay: true,
    loop: true,
    margin: 30,
    responsive:{
        0:{
            items: 2
        },
        768:{
            items: 2
        },
        1024:{
            items: 3
        },
        1200:{
            items: 4
        }
    }
})