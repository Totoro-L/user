$(document).ready(function(){
	$(".mask-menu").click(function(){
		$(".mask-menu-down").show();
	});
	$("body").click(function(){
		$(".mask-menu-down").hide();
	});
	$(".mask-menu").click(function(event){
		event.stopPropagation();
	});
	$(".mask-menu-down li").find("down").hover(
		function(){
			$(this).css("background-color","#89b9f1");
		
		},
		function(){
			$(this).css("background-color","white");
		}
	);
});