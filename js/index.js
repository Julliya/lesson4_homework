$(function(){
    var n=0;
		
	$(".news-text button").click(function(){
	    if (n==0){
        	$(this).next().attr("style","max-height:100%");
            $(this).text("Згорнути");
		    n=1;
		}else if(n==1){
			$(this).next().attr("style","max-height:70px");
            $(this).text("Читати більше...");
			n=0;
		}
    });
});

