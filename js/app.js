(function($){

   $("#go").on("click", function(e){
   		e.preventDefault();

   		
   		var ville = $("#ville").val();
   		var url = "http://api.openweathermap.org/data/2.5/forecast/daily/";
   		var unit = "metric";
   		var nb_day = 4;

   		$.getJSON(url,{q:ville,units:unit,cnt:nb_day})
   			.done(function(data){  				

   				if(data.cod=="404"){
   					alert("Ville introuvable");
   					return;
   				}else if(data.cod!="200"){
   					alert("Problème technique");
   					return;
   				}

   				var html_out = "";

   				$.each(data["list"],function(klist,vlist){
	   				html_out += "<ul>";
	   				html_out += "<li>Date : "+ formatDateTime(vlist.dt)+"</li>";
	   				html_out += "<li>Temp : "+vlist.temp.day+" °C</li>";
	   				html_out +='<li><img src="http://openweathermap.org/img/w/'+vlist.weather[0].icon+'.png"></li>';
	   				html_out += "</ul>";
	   			});

   				$("#resultats").html(html_out);

   				var coordLon = data.city.coord.lon;
   				var coordLat = data.city.coord.lat;

   				console.log("MAP = "+theMap);

   				theMap.panTo(new google.maps.LatLng( coordLat,coordLon ));



   			})
   			.fail(function(){
   				alert("Récupération des informations impossible !");
   			})
   			.always(function(){
				console.log("fx always todo !");
   			});
   });

	
	var formatDateTime = function(unixTimestamp){
		var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
		options.timeZone = "UTC";
		options.timeZoneName = "short";

		var d = new Date(unixTimestamp*1000);
		return d.toLocaleDateString("fr-FR", options);
	}



})(jQuery);