/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

  $.getJSON('http://localhost/NextUBackend/getCities.php', function (data) {
    $.each(data, function (k, v) {
      $("#selectCiudad").append("<option value=\"" + v + "\">" + v + "</option>");
    });
  });
  
  $.getJSON('http://localhost/NextUBackend/getTypes.php', function (data) {
        $.each(data, function (k, v) {
          $("#selectTipo").append("<option value=\"" + v + "\">" + v + "</option>");
        });
  });
$("#mostrarTodos").click(function () {
  $.getJSON('http://localhost/NextUBackend/getAllProperties.php', function (data) {
    $.each(data, function (k, v) {
      $(".colContenido").append(
        '<div class="row" style="width: 100%">' + 
        '<div class="col s4"> <img src="img/home.jpg" id="imagenP"> </img> </div>' + 
        '<div class="col s8">' +
        "<ul>" +
        "<li> <strong>Dirección:</strong>" + v.Direccion + "</li>" +
        "<li> <strong>Ciudad:</strong>" + v.Ciudad + "</li>" +
        "<li> <strong>Teléfono:</strong>" + v.Telefono + "</li>" +
        "<li> <strong>Código Postal:</strong>" + v.Codigo_Postal + "</li>" +
        "<li> <strong>Tipo:</strong>" + v.Tipo + "</li>" +
        "<li> <strong>Precio:</strong>" + v.Precio + "</li>" +
        "</ul>" +
        "</div>" + 
        "</div>");
    });
  });
});
$('#submitButton').click(function () {
  $(".colContenido").empty();
  var url = "buscador.php";
  $.ajax({
    type: "POST",
    // dataType: 'json',
    url: url,
    data: $("#formulario").serialize(),
    success: function (data) {
      var json = JSON.parse(data);
      $.each(json, function (k, v) {
        $(".colContenido").append(
          '<div class="row" style="width: 100%">' +
          '<div class="col s4"> <img src="img/home.jpg" id="imagenP"> </img> </div>' +
          '<div class="col s8">' +
          "<ul>" +
          "<li> <strong>Dirección:</strong>" + v.Direccion + "</li>" +
          "<li> <strong>Ciudad:</strong>" + v.Ciudad + "</li>" +
          "<li> <strong>Teléfono:</strong>" + v.Telefono + "</li>" +
          "<li> <strong>Código Postal:</strong>" + v.Codigo_Postal + "</li>" +
          "<li> <strong>Tipo:</strong>" + v.Tipo + "</li>" +
          "<li> <strong>Precio:</strong>" + v.Precio + "</li>" +
          "</ul>" +
          "</div>" +
          "</div>");
      });
    }
  });
});
inicializarSlider();
playVideoOnScroll();
