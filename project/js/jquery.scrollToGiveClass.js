/*
scrollToGiveClass 플러그인 옵션
baseline :
  'top'(기본값) - 화면의 위를 기준으로 적용
  'bottom' - 화면의 아래를 기준으로 적용
  'middle' - 화면의 가운데를 기준으로 적용
  정수 - 적용되는 위치값을 직접설정

class : 부여되는 클래스명
  'scrolled'(기본값)

add : baseline(기준)의 위치를 가감함
  정수 - 입력된 값만큼(px) 가감됨.
  실수(1>n>-1) - 입력된 값의 화면비만큼 값이 가감됨.

limit : 클래스를 적용받는 한계값의 기준
  'fixed' - 화면위에서부터 limitValue만큼 제한
  'baseline' - 적용받는 기준에서부터 limitValue만큼 제한

limitValue : 한계값
  정수

addFunction : function(){}
  - 클래스를 부여받을 때 함수를 호출함.

removeFunction : function(){}
  - 클래스가 제거될 때 함수를 호출함.

[Public Methods]
reSetting();
	- 포인터 재설정
*/
;(function($){
  $.fn.scrollToGiveClass = function(options){

    var defaultOptions = {
      baseline:'top',
      class:'scrolled',
      add:0,
      limit:'',
      limitValue:0,
      addFunction:function(){},
      removeFunction:function(){}
    };

    var op = $.extend(defaultOptions,options);
	var repointt = false;
    var last_num = 0;  
    this.each(function(n){
      var $win = $(window);
      var $this = $(this);
      var this_top = $this.offset().top;//영역의 위치    
      if(n>last_num) last_num = n;
        
      $win.on('load scroll',scrolled);
	  
      function scrolled(){
        var win_top = $win.scrollTop();//스크롤된 위치
        var win_height = $win.outerHeight();//화면의 높이
          
        if(repointt){
           this_top = $this.offset().top;//영역의 위치    
        }
        if(n==last_num) repointt = false;


        if(op.baseline=='bottom') win_top += win_height;
        if(op.baseline=='middle') win_top += win_height/2;
        if(!isNaN(op.baseline)) this_top = op.baseline;

        if( 1>op.add && op.add>-1 ){
          op.add = win_height * op.add;
        }

        win_top += op.add;

        var limit = true;
        if(op.limit=='fixed'){
          limit = win_top < op.limitValue;
        }
        if(op.limit=='baseline'){
          limit = win_top < this_top+op.limitValue;
        }

        if(win_top>this_top && limit){
          if(!$this.hasClass(op.class)) op.addFunction();
          $this.addClass(op.class);
        }else{
          if($this.hasClass(op.class)) op.removeFunction();
          $this.removeClass(op.class);
        }
      }//end:scrolled

      
    });//end:each()
      
    this.reSetting = function(){
    	repointt =true;

    	return this;
    }  
      
    return this;
  }//end:scrollClass()
})(jQuery);
