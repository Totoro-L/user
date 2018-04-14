function addTab(title, url){  
    if ($('#tt').tabs('exists', title)){  
        $('#tt').tabs('select', title);  
    } else {  
        var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';  
        $('#tt').tabs('add',{  
            title:title,  
            content:content,   //tab中显示的内容  
            closable:true  
        });  
    }  
} 
$(document).ready(function(){
	$(".parking-nav").find("li").click(function(){
		$(".parking-nav").find("li").attr("class", "down");
		this.className='active';
		var index = $(this).index();
		$("#divIfameId").attr("src",'parking'+(index+1)+'.html');
	});
});