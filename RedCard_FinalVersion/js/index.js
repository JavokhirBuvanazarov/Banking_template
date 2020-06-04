$('.carousel-main').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});

function myChange() {

    var y = document.getElementById('icon').classList.toggle("change");
    a = document.getElementById("mySidebar").getAttribute("data-toggle");
    if ( a == 0) {
        document.getElementById("mySidebar").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("mySidebar").setAttribute("data-toggle", "1")
    } else if ( a == 1) {
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
        document.getElementById("mySidebar").setAttribute("data-toggle", "0")
    }
    
    
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
});


// BY KAREN GRIGORYAN

$(document).ready(function() {
    /******************************
     BOTTOM SCROLL TOP BUTTON
     ******************************/

        // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD

    /*************************************
     LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
        // declare variable
    var h1 = $("#h1").position();
    var h2 = $("#h2").position();
    var h3 = $("#h3").position();

    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    }); // left menu link3 click() scroll END

}); // ready() END


