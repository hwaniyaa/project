;(function($){
  $(function(){

    var footerswiper = new Swiper("#footer-slide", {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var wrapswiper = new Swiper("#wrap", {
      direction: "vertical",
      mousewheel: true,
      speed: 1200
    });

    var mainswiper = new Swiper("#main-slide", {
      loop: true, //무한 루프
      autoplay: {
        delay: 6000,
      }
    });

    /* 미니 사진 버튼 1 */
    $(".image1-1 > a").click(function(){
      $(".mini-box1-1").add(this).toggleClass("btn-click1");
    });
    $(".image1-2 > a").click(function(){
      $(".mini-box1-2").add(this).toggleClass("btn-click2");
    });
    $(".image1-3 > a").click(function(){
      $(".mini-box1-3").add(this).toggleClass("btn-click3");
    });
    /* 미니 사진 버튼 2 */
    $(".image2-1 > a").click(function(){
      $(".mini-box2-1").add(this).toggleClass("btn-click1");
    });
    $(".image2-2 > a").click(function(){
      $(".mini-box2-2").add(this).toggleClass("btn-click2");
    });
    $(".image2-3 > a").click(function(){
      $(".mini-box2-3").add(this).toggleClass("btn-click3");
    });
    /* 미니 사진 버튼 3 */
    $(".image3-1 > a").click(function(){
      $(".mini-box3-1").add(this).toggleClass("btn-click1");
    });
    /* 미니 사진 버튼 4 */
    $(".image4-1 > a").click(function(){
      $(".mini-box4-1").add(this).toggleClass("btn-click1");
    });
    $(".image4-2 > a").click(function(){
      $(".mini-box4-2").add(this).toggleClass("btn-click2");
    });

    $(".cate").click(function(){
      $(".cate-title").slideToggle("100");
      $(this).toggleClass("menu-mov");
    });

    
  

    /* 하프가디건 상품색상 */
    $(".color-1").hover(function(){
      $(".color-after-1").add(this).toggleClass("color-click1")
    });
    $(".color-2").hover(function(){
      $(".color-after-2").add(this).toggleClass("color-click2")
    });
    $(".color-3").hover(function(){
      $(".color-after-3").add(this).toggleClass("color-click3")
    });
    $(".color-4").hover(function(){
      $(".color-after-4").add(this).toggleClass("color-click4")
    });
    $(".color-5").hover(function(){
      $(".color-after-5").add(this).toggleClass("color-click5")
    });

    /* size 버튼 */
    $(".size-btn").click(function(){
      $(".size-btn:hover").add(this).toggleClass("size-click")
    });

    $(".a-click").click(function(){
      $(".slide-00-right-box").toggleClass("color-click")
      $(this).toggleClass("rote")
    });

    
    

  });
})(jQuery);