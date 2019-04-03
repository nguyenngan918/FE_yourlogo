// alert('hello')
$(document).ready(function () {
    $("#slmax").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
    
    $("#slmin").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        // nav: true,
        // navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
    var owl = $('#slmin');
    owl.owlCarousel();
    // Go to the next item
    $('.next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    // $("#icon").owlCarousel({
    //     nav: true,
    //     navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    // });
});