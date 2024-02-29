jQuery(document).ready(function($) {
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("header-sticky");
  var sticky = header.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
  // const swiper = new Swiper(".swiper", {
  //     loop: true,
  //     effect: 'fade',
  //     pagination: {
  //       el: ".swiper-pagination"
  //     },
  //     navigation: {
  //       nextEl: ".swiper-next",
  //       prevEl: ".swiper-prev"
  //     },
  //     scrollbar: {
  //       el: ".swiper-scrollbar"
  //     },
  //     autoplay: {
  //       delay: 15000, // 15 seconds
  //       disableOnInteraction: false, 
  //     }
  //   });

    
    $(".select-filter").select2({
      minimumResultsForSearch: 20 
    });
    
    
    $("#campaign-form").steps({
      headerTag: "h6",
      bodyTag: "fieldset",
      transitionEffect: "slideLeft",
      onStepChanging: function(event, currentIndex, newIndex) {
        return true;
      },
      onFinishing: function(event, currentIndex) {
        // Validate the form on the last step
        $("#campaign-form").validate().settings.ignore = ":disabled,:hidden";
        return $("#campaign-form").valid();
      },
      onFinished: function(event, currentIndex) {
        // Submit the form if all steps are valid
        $("#campaign-form").submit();
      },
      labels: {
        next: "Next", // Change the text of the "Next" button
        previous: "Previous", // Change the text of the "Previous" button
        finish: "Submit" // Change the text of the "Finish" button
      }
    });
    
  
    
  
    $('.select-all').click(function(event) {   
      if(this.checked) {
          // Iterate each checkbox
          $(this).parents(".maga-card").find('.form-check-input').each(function() {
              this.checked = true;                        
          });
      } else {
        $(this).parents(".maga-card").find('.form-check-input').each(function() {
              this.checked = false;                        
          });
      }
    });
  
  $('.actions ul a[href="#finish"]').addClass('btn-left cart-checkout');
  $('.actions ul a[href="#next"]').addClass('btn-left next-btn');
  $('.actions ul a[href="#previous"]').addClass('btn-previous');
  $('.number').text(function(i, text) {
    return text.replace('.', '');
  });

});
