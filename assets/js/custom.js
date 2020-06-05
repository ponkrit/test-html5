<!-- Mobile Menu -->
$(document).ready(function () {
    "use strict";
    $("#menu").mmenu({
        "classes": "mm-slide",
        "offCanvas": {
            "position": "right"
        },
        "footer": {
            "add": true,
            "title": "Copyrights 2016 Pearl. all rights reserved."
        },

        "header": {
            "title": "Pearl Food",
            "add": true,
            "update": true
        },

    });
});
<!-- Sticky Header -->

<!-- Header One -->
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});


<!-- Header Two -->
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header-two').addClass("sticky");
    }
    else {
        $('.header-two').removeClass("sticky");
    }
});


<!-- Smooth Scrol -->
$(function () {

    var $window = $(window);		//Window object

    var scrollTime = 0.6;			//Scroll time
    var scrollDistance = 355;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function (event) {

// event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 125 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {y: finalScroll, autoKill: true},
            ease: Power1.easeOut,
            autoKill: true,
            overwrite: 5
        });

    });

});


<!-- All Carousel -->
<!-- Home News-Posts Carousel -->
$("#owl-demo").owlCarousel({
    items: 3,
    lazyLoad: true,
    navigation: true
});


<!-- Pearl Tour -->
$(document).ready(function () {

    $("#tour").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});


<!-- About Hotel -->
$(document).ready(function () {

    $("#hotel-view").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});


<!-- Welcome Text -->

$("#special-services").owlCarousel({
    items: 2,
    lazyLoad: true,
    navigation: true
});


//PreLoader
jQuery(window).load(function () { // makes sure the whole site is loaded
    jQuery('#status').fadeOut(); // will first fade out the loading animation
    jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    jQuery('body').delay(350).css({'overflow': 'visible'});
})


// <!--Back to Top-- >
jQuery(document).ready(function ($) {
// browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
        scroll_top_duration = 1400,
//grab the "back to top" link
        $back_to_top = $('.cd-top');

//hide or show the "back to top" link
    $(window).scroll(function () {
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });


//smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });

});


//smooth scroll
$(document).ready(function () {

    $("a.topLink").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});


<!-- Shop Cart Bag -->
//Accordian Action
var action = 'click';
var speed = "500";


//Document.Ready
$(document).ready(function () {
    //Question handler
    $('li.close-bag').on(action, function () {
        //gets next element
        //opens .a of selected question
        $(this).next().slideToggle(0)
        //selects all other answers and slides up any open answer
            .siblings('li.open-bag').slideUp();

        //Grab img from clicked question
        var img = $(this).children('img');
        //Remove Rotate class from all images except the active
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate');

    });//End on click

});//End Ready


<!-- Upcoming Event Coundown -->
$('#example').countdown({
    date: '5/29/2019 23:59:59',
    offset: -8,
    day: 'Day',
    days: 'Days'
}, function () {

});


<!-- Home News-Posts Carousel -->
$("#owl-demo").owlCarousel({
    items: 3,
    lazyLoad: true,
    navigation: true
});


<!-- Testimonials Carousel -->
$("#owl-demo2").owlCarousel({
    autoPlay: 111110,
    stopOnHover: true,
    navigation: true,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,

});


<!-- Blog images slide Carousel -->
$("#blog-slide").owlCarousel({

    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true

// "singleItem:true" is a shortcut for:
// items : 1, 
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false

});

// JavaScript Document Form Validator

function validateEmail(input) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    return pattern.test(input);
}

function validateContact() {
    var errorMessage = '';
    var name = $("#name").val();
    var company = $("#company").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    if (name == "") {
        errorMessage = 'Please provide your name.<br />';
        displayContactError(errorMessage);

        return false;
    }

    if (company == "") {
        errorMessage = 'Please provide your company.<br />';
        displayContactError(errorMessage);

        return false;
    }

    if (email == "") {
        errorMessage = 'Please provide your email.<br />';
        displayContactError(errorMessage);

        return false;
    }

    if (!validateEmail(email)) {
        errorMessage = 'Please provide a valid email address.<br />';
        displayContactError(errorMessage);

        return false;
    }

    if (phone == "") {
        errorMessage = 'Please provide your phone no.<br />';
        displayContactError(errorMessage);

        return false;
    }

    if (message == "") {
        errorMessage = 'Please provide your message.<br />';
        displayContactError(errorMessage);

        return false;
    }

    $.ajax({
        type: "POST",
        url: "contact.php",
        data: $("#reserv_form").serialize(),
        success: function (msg) {
            document.getElementById("reserv_error").style.display = "none";
            $("#name").val('');
            $("#company").val('');
            $("#email").val('');
            $("#phone").val('');
            $("#message").val('');

            if (msg == 1) {
                $("#reserv_success_msg").fadeIn(2000);
                $("#reserv_form").fadeOut(2000);

                setTimeout("$('#reserv_success_msg').fadeOut();", 6000);
                setTimeout("$('#reserv_form').fadeIn();", 6000);
            } else {
                errorMessage = 'Occur some problem while send contact. Please try again or contact us by telephone.';
                displayContactError(errorMessage);
                return false;
            }
        }
    });
}

function displayContactError(errorMessage) {
    document.getElementById("reserv_error").style.display = "block";
    document.getElementById("reserv_error").innerHTML = errorMessage;
}