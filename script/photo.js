var image = '';
function selectImage(file){
	if(!file.files || !file.files[0]){
		return;
	}
	var reader = new FileReader();
	reader.onload = function(evt){
		document.getElementById('image').src = evt.target.result;
		image = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
	
}
function uploadImage(){
	
  $.ajax({

	type:'POST',

	url: '../../touxiang.php', 

	data: {image: image},

	async: false,

	dataType: 'json',

	success: function(data){

	if(data.success){

	alert('上传成功');

	}else{

	alert('上传失败');

	}

	},

	error: function(err){

	alert('网络故障');

	}

});

}
$(document).ready(function(){
	$("#form-img img").hover(
		function(){
			$(".img-select").show();
		},
		function(){
			$(".img-select").hide();
		}
	);
	$("#image").click(function(){
		$(".img-file").trigger("click");
	});
});