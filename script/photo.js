function fsubmit(){  
        var data = new FormData($('#form1')[0]);
        $.ajax({  
            url: '../../touxiang.php',  
            type: 'POST',  
            data: data,
            cache: false,  
            processData: false,  
            contentType: false,
			error: function(XMLHttpRequest, textStatus, errorThrown) {  //#3这个error函数调试时非常有用，如果解析不正确，将会弹出错误框
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus); // paser error;
                    }
        }).done(function(ret){  
            var reg = new RegExp('"',"g");  
			var arr=JSON.parse(ret);
			var Return=JSON.stringify(arr.result);
			Return = Return.replace(reg, "");
			var Src=JSON.stringify(arr.touxiang);
			Src = Src.replace(reg, "");
			alert('result:'+Return);
			alert('src:'+Src);
			if(Return=='success'){
				alert('ok！');
				 $("#image").attr("src",Src);
			}				 
        });  
        alert('yes1');
        return false;  
    }  