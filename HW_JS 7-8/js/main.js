(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
    
    $(".form").mouseover(function (){ 
$(this).next('div.help').fadeIn(500); 
}); 

$(".form").mouseleave(function (){
$(this).next('div.help').fadeOut(300); 
}); 
  
})
})(jQuery);

 