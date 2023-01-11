/*
옵션
class : 부여되는 클래스명칭
        (기본값 : 'active')
----------------------------------------------------
addTarget : 클래스를 받는 추가대상(요소)
            예)
              addTarget : 'body, #this'
              -body태그와 id=this요소가 추가적으로
               클래스를 부여받음.
----------------------------------------------------
motion : 동작하는 이벤트
          (기본값 : 'click')
          - motion : 'mouseover' (마우스를 올렸을때 적용)
          - motion : 'hover'
            (마우스를 올렸을때 클래스가 부여되고,
              마우스를 내리면 클래스가 제거된다.)
----------------------------------------------------
addBtn : 추가로 동작하는 버튼
        예) addBtn : '.other'
        class=other요소를 통해서 동일동작이 가능
----------------------------------------------------
remove : 클래스를 제거하는 버튼 추가설정
        예) remove : '.remove'
        class=remove요소를 통해서 부여된 클래스를 제거가능
----------------------------------------------------
클래스가 부여될 때 호출되는 함수
  addFunction:function(){}
----------------------------------------------------
클래스가 제거될 때 호출되는 함수
  removeFunction:function(){}
*/

;(function($){
	$.fn.clickToGiveClass = function(options){

		var ops = {
					class:'active',
					addTarget:'none',
					motion:'click',
					addBtn:'',
					remove:'',
					addFunction:function(){},
					removeFunction:function(){}
				  };

		ops = $.extend(ops,options);//객체를 합침.

		return this.each(function(){
		  //플러그인 동작내용
		  var btn = $(this);
		  var btns = $(ops.addBtn);
		  var target = btn.attr('href');// "#box"

		  target = (ops.addTarget == 'none') ? target : target+","+ops.addTarget;
		  //조건이 true이면 #box
		  //조건이 false이면 #box,body

		  if(ops.motion == 'mouseover') btn.add(btns).mouseover(toggling);
		  else if(ops.motion == 'hover') btn.add(btns).hover(giving,erasing);
		  else btn.add(btns).click(toggling);

		  $(ops.remove).click(erasing);

		  function toggling(e){
			e.preventDefault();
			if(!btn.hasClass(ops.class)){
			  giving();
			}else{
			  erasing();
			}
		  }//end:toggling

		  function giving(){
			btn.add($(target)).addClass(ops.class);
			ops.addFunction();
		  }//end:giving

		  function erasing(){
			btn.add($(target)).removeClass(ops.class);
			ops.removeFunction();
		  }//end:erasing


			
		});
	}	
})(jQuery);