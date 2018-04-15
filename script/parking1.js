$(document).ready(function(){
	$(".title").find("li").click(function(){
		$(this).siblings().attr("class", "");
		$(this).attr("class", "active");
		var index = $(this).index();
		var x='.parking-content'+(index+1);
		$(".parking-content1").hide();
		$(".parking-content2").hide();
		$(x).show();
	});
	
	
	
	ajax('../../userdata.php', function (str){
	    var reg = new RegExp('"',"g");  
        str = str.replace(reg, "");
		var arr=JSON.parse(str);
		
		// var Touxiang=JSON.stringify(arr.userPhoto);
		// $("#image").attr("src",Touxiang);
		
		$("#parking-name-txt").val(JSON.stringify(arr.userName));
		$("#parking-birth-txt").val(JSON.stringify(arr.userBirthday));
		$("#parking-phone-txt").val(JSON.stringify(arr.userTEL));
		$("#parking-message-txt").val(JSON.stringify(arr.userEmail));
	}, function (){
		alert('失败');
	});
	
	
	
	
	
	$("#parking-name").click(function(){
		$("#parking-name-txt").removeAttr("disabled");
		$("#name .btn1").show();
		$("#name .btn2").show();
	});
	$("#name .btn2").click(function(){
		$("#parking-name-txt").attr("disabled","disabled");
		$("#name .btn1").hide();
		$("#name .btn2").hide();
	});
	$("#name .btn1").click(function(){
		var name ={
			"userName":$("#parking-name-txt").val()
		};
		push(name,'../../userchange.php')
		$("#parking-name-txt").attr("disabled","disabled");
		$("#name .btn1").hide();
		$("#name .btn2").hide();
	});
	
	
	$("#parking-phone").click(function(){
		$("#parking-phone-txt").removeAttr("disabled");
		$("#phone .btn1").show();
		$("#phone .btn2").show();
	});
	$("#phone .btn2").click(function(){
		$("#parking-phone-txt").attr("disabled","disabled");
		$("#phone .btn1").hide();
		$("#phone .btn2").hide();
	});
	$("#phone .btn1").click(function(){
		var name ={
			"userTEL":$("#parking-phone-txt").val()
		};
		push(name,'../../userchange.php')
		$("#parking-phone-txt").attr("disabled","disabled");
		$("#phone .btn1").hide();
		$("#phone .btn2").hide();
	});
	
	
	
	$("#parking-message").click(function(){
		$("#parking-message-txt").removeAttr("disabled");
		$("#message .btn1").show();
		$("#message .btn2").show();
	});
	$("#message .btn2").click(function(){
		$("#parking-message-txt").attr("disabled","disabled");
		$("#message .btn1").hide();
		$("#message .btn2").hide();
	});
	$("#message .btn1").click(function(){
		var name ={
			"userName":$("#parking-message-txt").val()
		};
		push(name,'../../userchange.php')
		$("#parking-message-txt").attr("disabled","disabled");
		$("#message .btn1").hide();
		$("#message .btn2").hide();
	});
});