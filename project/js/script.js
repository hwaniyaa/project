;(function($){
	$(function(){
		
		var num = 0;

		var menuSwiper = new Swiper("#gnb",{
			wrapperClass:"menu",
      slideClass:"btn",
			slidesPerView:4 //보여지는 메뉴버튼 수 (=전체갯수)
		});

		var wrapSwiper = new Swiper("#wrap",{
			wrapperClass:"container",
      slideClass:"area",
			direction:"vertical", //수직으로 슬라이드
			mousewheel:true, //마우스휠을 사용하여 동작가능
			speed:600, //영역 전환속도
			//effect:"fade", //영역 전환효과
			thumbs: {
				swiper:menuSwiper, //썸네일용 버튼으로 사용될 스와이퍼
				slideThumbActiveClass:"active" //버튼이 활성화될 때 들어가는 클래스
			},
			pagination: {
				el: '.pager ul', //페이지 버튼이 만들어지는 대상
				bulletActiveClass:"active", //활성화된 버트넹 부여되는 클래스
				clickable:true, //버튼 클릭시 화면 전환이 가능하게 설정
				renderBullet:function(index, className){
					var name = $('.area').eq(index).attr("id");
					return `<li class="${className}"><span>${name}</span></li>`;
				}
			},
			scrollbar: {
				el: '.scrollbar', //스크롤 막대 영역
				draggable: true,	//드래그를 통한 슬라이드 이동 가능
				hide:true
			},
			navigation: {
				nextEl: '.down',
				prevEl: '.up',
				disabledClass:'hidden' //비활성화시 적용되는 클래스
			},
			on:{ //이벤튼(상황)에 따른 함수 호출
				init:function(){ //스와이퍼가 초기화 될때, 맨처음 한번 실행
					num = this.activeIndex; //현재 슬라이드 번호가 추출
					$("#wrap").addClass("active"+num); //#wrap에게 "active0"클래스 부여
				},
				slideChange:function(){ //슬라이드가 전환되었을 때 실행
					$("#wrap").removeClass("active"+num);
					num = this.activeIndex;
					$("#wrap").addClass("active"+num);
				}
			}
		});//end:wrapSwiper();

		$(".work_area").hover(wrapSwiper.mousewheel.disable,wrapSwiper.mousewheel.enable);

		//poptrox플러그인 호출
		$("#works").poptrox({
			selector:'.img' //플러그인 기능을 하는 'a'태그
		});

		//emailjs플러그인 호출
		emailjs.init("ayR1B5hUMMUY1mJZy");

		$("#send_btn").click(function(e){
			e.preventDefault(); //태그의 본래기능을 하지않음.

			emailjs.sendForm('ghksl11q', 'template_q9zwzba', '#contact-mail')
			.then(function(response) {
				alert("메일이 성공적으로 보내졌습니다.");
			}, function(error) {
				alert("메일의 전송이 실패하였습니다.");
			});

		});


		$('.work-bg').scrollToGiveClass({
			class: 'mov',
			baseline: 'top',
			add: 1000
		});
		$('.work-bg2').scrollToGiveClass({
			class: 'mov2',
			baseline: 'middle',
			add: 500
		});
		$('.top-bg').scrollToGiveClass({
			baseline: 90,
			class: 'mov'
		});


const pics = document.querySelectorAll(".pic > span") 
const contents = document.querySelectorAll(".content")
const area01 = contents[0].offsetTop
const area02 = contents[1].offsetTop
const area03 = contents[2].offsetTop
const area04 = contents[3].offsetTop
const area05 = contents[4].offsetTop

pics[0].onclick = function(){
  window.scroll({top:area01, behavior: 'smooth'})
}
pics[1].onclick = function(){
  window.scroll({top:area02, behavior: 'smooth'})
}
pics[2].onclick = function(){
  window.scroll({top:area03, behavior: 'smooth'})
}
pics[3].onclick = function(){
  window.scroll({top:area04, behavior: 'smooth'})
}
pics[4].onclick = function(){
  window.scroll({top:area05, behavior: 'smooth'})
}



var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;
var del = -1;
var repeatInt= null;
var tyInt = null;


// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 

typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    tyInt = setInterval(typing,100); // 첫번재 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
   $(".typing").append(typingTxt[typingIdx]); 
    // 한글자씩 이어준다. 
     typingIdx++; 
    if(typingIdx == typingTxt.length){
      //첫번째 단어가 써지면 1분쉰다.
        clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,100);
         },600);
       }
   } else{ 
     
     //한문장이끝나면
       if(-typingTxt.length-1 < del ){
         //한글자씩 지운다.
          $(".typing").html(typingTxt.slice(0, del))
          del--;
       }else{
         if(liIndex >= liLength-1){
              liIndex=0;
         }else{
           liIndex++;
         }
         
         //변수초기화 
         typingIdx=0;
         del= -1;
         typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
         
         //1분후 다음분장 타이핑 
         clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,100);
         },600);
       }
     

    } 
}  




$(".cafe-main").click(function(){
	$(".cate-bg").toggleClass('mov');
	$(".mov01").toggleClass('mov');
	$(".mov02").toggleClass('mov');
});

$(".cafe-main").click(function(){
	
});

	});
})(jQuery);