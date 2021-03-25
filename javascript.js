$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
});
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
 document.querySelectorAll(".open")[1].addEventListener("click", function() {
        document.querySelector(".popup").style.display = "flex";
      })

      document.querySelectorAll(".close")[0].addEventListener("click", function() {
        document.querySelector(".popup").style.display = "none";
      });
  document.querySelectorAll(".open")[0].addEventListener("click", function() {
        document.querySelector(".popup1").style.display = "flex";
      })

      document.querySelectorAll(".close")[1].addEventListener("click", function() {
        document.querySelector(".popup1").style.display = "none";
      });