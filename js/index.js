/**
 * Created by Administrator on 2017/12/12.
 */

$(function(){
    $(".more").click(function(e){
        e = e || event;
        $(this).find(".more-hide").toggle();
        e.stopPropagation();
    });
   $(document).click(function(){
       $(".more-hide").slideUp(1000);
   });
});