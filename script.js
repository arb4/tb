
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.962663, -71.261914],
    zoom: 15,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  
			  

			  
			  
			  
var Z1_2501 = L.geoJSON(Z1_2501, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);			  
			  
			  
			  

  
 var Z2_2501 = L.geoJSON(Z2_2501, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 2</p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map); 
  
  var Z3_2501 = L.geoJSON(Z3_2501, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 3</p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
  
  var Z4_2501 = L.geoJSON(Z4_2501, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 4</p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
  
  
  var Z5_2501 = L.geoJSON(Z5_2501, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 5</p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);


 /* 
  var N109_2401 = L.geoJSON(N109_2401, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 6</p>'+'</h2><p>JOSE MONTERO</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
  
  var M_2401 = L.geoJSON(M_2401, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 7</p>'+'</h2><p>MANUEL</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
 /* 
  var Z7_2301 = L.geoJSON(Z7_2301, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 7</p>'+'</h2><p>JAVIER-YASMERY</p><p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
 /* 
  
  var Z8_2201 = L.geoJSON(Z8_2201, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO</p>'+'</h2><p>LUIS M-PATO</p><p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
  var TC2_2201 = L.geoJSON(TC2_2201, {
	style: style5,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><b><p style="color:red;">ATENCION!!</p></b>'+'</h2><b><p style="color:red;">TC2-SOLO CABLE ANALOGO!!!</p></b>');
  }
  }).addTo(map);
  
  
  */
  
	  

			  
			  
			  


			  

			  
			  

  
                  
              			  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
