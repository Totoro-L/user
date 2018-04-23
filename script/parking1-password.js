$(".strong span").hide();
$(document).ready(function(){
	$("#btn3").click(function(){
		var pas1=document.getElementById("past").value;
        var pas2=document.getElementById("new").value;
		var pas3=document.getElementById("new-repeat").value;
	
		if(pas1=="" || pas2=="" ||pas3=="")
		{
			alert('输入框不得为空');
		}
		else{
			var lengthRegex =/^\w{6,16}$/;
			if(!lengthRegex.test(pas2)){
				alert('新密码不符合要求');
			}
			// else if(pass==pas1){
				// alert('旧密码输入错误！');
			// }
			else if(pas1==pas2){
				alert('新旧密码不可相同！');
			}
			else if(pas2!=pas3){
				alert('新密码与确认密码不匹配！');
			}
			else{
				var name ={
					"Newpassword":$("#new").val(),
					"password":$("#past").val()
				};
				alert(name);
				push(name,'../../userchange.php');
				// top.location.replace("../index.html");
				ajax('../../userdata.php', function (str){
					var reg = new RegExp('"',"g");  
					var arr=JSON.parse(str);
					var Return=JSON.stringify(arr.result);
					Return = Return.replace(reg, "");
					alert('result:'+Return);
					if(Return=='fail'){
						alert('旧密码输入错误！');
					}
				}, function (){
					alert('失败');
				});
				
				// else{
					// top.location.replace("localhost/user2.0/index.html");
				// }
			}
		}
		
	});
	$("#new").keyup(function(e) {
		var strongRegex = /^\w{6,16}$/;
		var mediumRegex = /^[A-Za-z0-9]{6,16}$/;
		var weakRegex = /^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/;
		if ($(this).val()==''){
			$(".tip").html("6-16位，由字母（区分大小写）、数字组成");
		}
		else if (weakRegex.test($(this).val())) {
			$(".span1").css("background-color","red");
			$(".span2").css("background-color","white");
			$(".span3").css("background-color","white");
			$(".tip").html("");
		 } 
		 else if (mediumRegex.test($(this).val())) {
			$(".span1").css("background-color","red");
			$(".span2").css("background-color","orange");
			$(".span3").css("background-color","white");
			$(".tip").html("");
		 } 
		 else if (strongRegex.test($(this).val())) {
			$(".span1").css("background-color","red");
			$(".span2").css("background-color","orange");
			$(".span3").css("background-color","green");
			$(".tip").html("");
		 }
		 else {
			$(".strong span").css("background-color","white");
			$(".tip").html("密码长度不符合要求！");
		 }
		 return true;
	});
	$("#new").click(function(){
		$(".tip").show();
		$(".strong span").show();
	});
});