$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

  document.getElementById('play-button').addEventListener('click', function() {
    document.getElementById('button-sound').play();
  });

    document.addEventListener("DOMContentLoaded", function () {
      // Get the elements to add event listeners
      var reservationBtn = document.querySelector(".btn-brand");
      var menuItems = document.querySelectorAll(".menu-item");

      // Event listener for "click" event on reservation button
      reservationBtn.addEventListener("click", function () {
        console.log("Reservation button clicked");
        // Add your code here to handle the click event
      });

      // Event listener for "mouseover" event on menu items
      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseover", function () {
          console.log("Mouse over menu item");
          // Add your code here to handle the mouseover event
        });
      });

      // Event listener for "keypress" event on the document
      document.addEventListener("keypress", function (event) {
        console.log("Key pressed: " + event.key);
        // Add your code here to handle the keypress event
      });
    });
