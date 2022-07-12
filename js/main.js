$(document).ready(function () {
  $.get("data.json", function (data) {
    var desayunosHTML = "";
    var menuHTML = "";
    var bebidasHTML = "";

    
    $.each(data.desayunos, function (i, v) {
      desayunosHTML += `<div class="col-md-6">
        <div class="ticketBox">
            <div class="inactiveStatus"></div>
            <div class="row">
            <div class="col-xs-6">
                <div class="ticket-name"> ${v.nombre} </div>
            </div>
            <div class="col-xs-6">
                <div class="ticket-price-count-box">
                <p class="price">${v.precio}</p>
                </div>
            </div>
            </div>
            <div class="ticket-description">
            <p>
                <strong>Detalle:</strong>
                <br>${v.detalle}
            </p>
            </div>
        </div>
        </div>`;                
    });

    $("#desayunos-menu").html(desayunosHTML);

    $.each(data.menu, function (i, v) {
        menuHTML += `<div class="col-md-6">
          <div class="ticketBox">
              <div class="inactiveStatus"></div>
              <div class="row">
              <div class="col-xs-6">
                  <div class="ticket-name"> ${v.nombre} </div>
              </div>
              <div class="col-xs-6">
                  <div class="ticket-price-count-box">
                  <p class="price">${v.precio}</p>
                  </div>
              </div>
              </div>
              <div class="ticket-description">
              <p>
                  <strong>Detalle:</strong>
                  <br>${v.detalle}
              </p>
              </div>
          </div>
          </div>`;                
      });
  
      $("#menu-menu").html(menuHTML);

      $.each(data.bebidas, function (i, v) {
        bebidasHTML += `<div class="col-md-6">
          <div class="ticketBox">
              <div class="inactiveStatus"></div>
              <div class="row">
              <div class="col-xs-6">
                  <div class="ticket-name"> ${v.nombre} </div>
              </div>
              <div class="col-xs-6">
                  <div class="ticket-price-count-box">
                  <p class="price">${v.precio}</p>
                  </div>
              </div>
              </div>
              <div class="ticket-description">
              
              </div>
          </div>
          </div>`;                
      });
  
      $("#bebidas-menu").html(bebidasHTML);
  });
});
