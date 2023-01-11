;(function($){
  $(function(){
    
    var mainswiper = new Swiper("#main-slide", {
      loop:true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".main-slidebar",
        type: "progressbar",
      }
    });

    var subswiper = new Swiper("#slide-02", {
      centeredSlides: true,
      slidesPerView: 2,
      loop:true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".sub-slide-bar02",
        type: "progressbar",
      },
    });

    var sub1swiper = new Swiper("#slide-03", {
      centeredSlides: true,
      slidesPerView: 5,
      loop:true,
      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".sub-slide-bar03",
        type: "progressbar",
      },
    });

    

    $(".top-bg").scrollToGiveClass({
      class: 'header-inner',
      baseline: 90
    });

    $(".hover-m").scrollToGiveClass({
      class: 'mov01',
      baseline: 'middle',
      add: 450
    });

    $(".item01-1-txt").scrollToGiveClass({
      class: 'mov01',
      baseline: 'middle',
      add: 450
    });

    $(".menu-click").click(function(){
      $(".cate").toggleClass("cate-on");
      $(".line").toggleClass("cate-on");
    });


    $(".mouseover").mouseover(function(){
      $(this).find(".sub-cate").stop().
      slideDown();
    }).mouseout(function(){
      $(this).find(".sub-cate").stop().
      slideUp();
    });


// 오른쪽에서 좌특으로 이동

let didScroll = false;
let paralaxTitles = document.querySelectorAll('.item02');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / -15 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

// --------------------------------------


// 좌측에서 오른쪽으로 이동

let m1 = false;
let m2 = document.querySelectorAll('.item01');

const a1 = () => {
	m1 = true
}

const m3 = () => {
	if(m1) {
		m2.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 15 + "%)"
		})
		m1 = false;
	}
	requestAnimationFrame(m3);
}
requestAnimationFrame(m3);
window.addEventListener('scroll', a1)


// --------------------------------------



  });
})(jQuery);