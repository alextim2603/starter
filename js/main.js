;(function($){
    "use srict";
  	var teamSlider = $('.ba-team-slider');
  	teamSlider.slick({
  		dots: true,
  		slide: '.ba-slide',
  		prevArrow: '.ba-slider-prev',
  		nextArrow: '.ba-slider-next',
  		slidesToShow: 3
  	});


  		  function initMap() {
  		  	var mapDiv = document.getElementById('map'),
  		  		poltavaAdress = mapDiv.innerHTML
  			var poltava = {lat: 49.568528, lng: 34.585432};
  			          var map = new google.maps.Map(mapDiv, {
  			            zoom: 17,
  			            center: poltava,
  			            disableDefaultUI: true,//отключает весь пользовательский интерфейс по умолчанию
  			            draggable: false,//предотвращает перетаскивание карты
  			            //mapTypeId: google.maps.MapTypeId.SATELLITE//вид со спутника

  			           /* styles: [
  			                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  			                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  			                        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  			                        {
  			                          featureType: 'administrative.locality',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'poi',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'poi.park',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#263c3f'}]
  			                        },
  			                        {
  			                          featureType: 'poi.park',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#6b9a76'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#38414e'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'geometry.stroke',
  			                          stylers: [{color: '#212a37'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#9ca5b3'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#746855'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'geometry.stroke',
  			                          stylers: [{color: '#1f2835'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#f3d19c'}]
  			                        },
  			                        {
  			                          featureType: 'transit',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#2f3948'}]
  			                        },
  			                        {
  			                          featureType: 'transit.station',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#17263c'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#515c6d'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'labels.text.stroke',
  			                          stylers: [{color: '#17263c'}]
  			                        }
  			                      ]//стиль карты ночь*/

  			          });
  			          var marker = new google.maps.Marker({
  			            position: poltava,
  			            map: map,
  			            animation: google.maps.Animation.BOUNCE,//для того аби постійно пригав
  			            icon: './img/beetroot.svg'// для задавання кастомного курсора

  			          });


  		            /*var marker2 = new google.maps.Marker({
  		              position: {lat: 49.568528, lng: 34.588432},
  		              map: map,
  		              animation: google.maps.Animation.BOUNCE,
  		              icon: './img/beetroot.svg'

  		            }); */ /*if we wont two or more marers*/

  			          var infowindow = new google.maps.InfoWindow({
  			              content: poltavaAdress
  			            });

  			          infowindow.open(map, marker); //вставка надписи над изображением

  			      }
  			          window.onload = initMap;

})(jQuery);
