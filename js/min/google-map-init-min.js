function AutoCenter(){var e=new google.maps.LatLngBounds;$.each(markers,function(i,t){e.extend(t.position)}),map.fitBounds(e)}var locations=[['<span class="fifa">THREE<em>38</em> inc</span><br><p>#323, Defence Avenue <br> K Narayanpura,<br> Bengaluru - 77</p>',13.056934,77.64426,1]],map=new google.maps.Map(document.getElementById("map"),{zoom:17,scrollwheel:!1,styles:[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],center:new google.maps.LatLng(13.057085,77.6427203)}),infowindow=new google.maps.InfoWindow,marker,i,markers=new Array;for(i=0;i<locations.length;i++)marker=new google.maps.Marker({position:new google.maps.LatLng(locations[i][1],locations[i][2]),map:map}),markers.push(marker),google.maps.event.addListener(marker,"click",function(e,i){return function(){infowindow.setContent(locations[i][0]),infowindow.open(map,e)}}(marker,i));