(function($){

   $("#go").on("click", function(e){
   		e.preventDefault();

   		
   		var ville = $("#ville").val();
   		var url = "http://api.openweathermap.org/data/2.5/weather";

   		$.getJSON(url,{q:ville})
   			.done(function(data){  				

   				if(data.cod=="404"){
   					alert("Ville introuvable");
   					return;
   				}else if(data.cod!="200"){
   					alert("Problème technique");
   					return;
   				}

   				var html_out = "";
   				html_out += "<ul>";
   				$.each(data["weather"][0],function(k,v){
   					html_out += "<li>"+k+" > "+v+"</li>";
   				});
   				html_out += "</ul>";

   				html_out +='<img src="http://openweathermap.org/img/w/'+data["weather"][0]["icon"]+'.png">';

   				$("#resultats").html(html_out);
 


   				console.log(data["weather"][0]);

   			})
   			.fail(function(){
   				alert("Récupération des informations impossible !");
   			})
   			.always(function(){
				console.log("fx always todo !");
   			});
   });



})(jQuery);