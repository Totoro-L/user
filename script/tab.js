$(document).ready(function(){
	$(".parking-nav").find("li").click(function(){
		$(this).siblings().attr("class", "down");
		$(this).attr("class", "active");
		var index = $(this).index();
		$("#divIfameId").attr("src",'parking/parking'+(index+1)+'.html');
	});
});