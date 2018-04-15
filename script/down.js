$(document).ready(function(){
	// $(".mask-menu").click(function(){
		// $(".mask-menu-down").show();
	// });
	// $("body").click(function(){
		// $(".mask-menu-down").hide();
	// });
	// $(".mask-menu").click(function(event){
		// event.stopPropagation();
	// });
	$(".mask-menu").mouseenter(
		function(){
			$(".mask-menu-down").show();}
	);
	$(".mask-menu").mouseleave(function(){
		setTimeout(function(){
			$(".mask-menu-down").hover(
				function(){
					$(".mask-menu-down").show();
				},
				function(){
					$(".mask-menu-down").hide();
				}
			);
			$(".mask-menu-down").hide();
		},1000);
		
	});
	$(".mask-menu-down li").hover(
		function(){
			$(this).css("background-color","#89b9f1");
		},
		function(){
			$(this).css("background-color","white");
		}
	);
});