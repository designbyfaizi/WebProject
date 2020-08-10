$(document).ready(function(){


    //Banner Owl Carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1
    });

    //Top Sale Owl Carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //ISOTOPE FILTER
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-items',
        layoutMode:'fitRows'
    });

    //Filter Items on button click
    $(".button-group").on("click","button",function(){
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    })

        //New Phones Owl Carousel
        $("#new-phones .owl-carousel").owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });

        //News Owl Carousel
        $("#news .owl-carousel").owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                }
            }
        })
    

        //PRODUCT QUANTITY SECTION
        let $qty_up = $(".qty .qty_up");
        let $qty_down = $(".qty .qty_down");
        //let $input = $(".qty .qty_input");

        //CLICK ON UP BUTTON
        $qty_up.click(function(e){
            let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
            if($input.val() >= 1 && $input.val()<=9){
                $input.val(function(i,oldval){
                    return ++oldval;
                });
            }
        });

        //CLICK ON DOWN BUTTON
        $qty_down.click(function(e){
            let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
            if($input.val() > 1 && $input.val()<=10){
                $input.val(function(i,oldval){
                    return --oldval;
                });
            }
        });
});