$(document).ready(function() {
  var pizzas = $("#btn-pizza");
  var postres = $("#btn-postres");
  var promociones = $("#btn-promociones");
  var bebidas = $("#btn-bebidas");

  var cajaPizza = $("#pizzas");
  var cajaPostre = $("#postres");
  var cajaPromociones = $("#promociones");
  var cajaBebidas = $("#bebidas");

  pizzas.click(function() {
    cajaPostre.hide();
    cajaPromociones.hide();
    cajaBebidas.hide();
    cajaPizza.toggle(1000);
  });
  postres.click(function() {
    cajaPizza.hide();
    cajaPromociones.hide();
    cajaBebidas.hide();
    cajaPostre.toggle(1000);
  });
  promociones.click(function() {
    cajaPizza.hide();
    cajaPostre.hide();
    cajaBebidas.hide();
    cajaPromociones.toggle(1000);
  });
  bebidas.click(function() {
    cajaPizza.hide();
    cajaPromociones.hide();
    cajaPostre.hide();
    cajaBebidas.toggle(1000);
  });
});

window.onload = function() {
   $("#load").fadeOut();
   $("body").removeClass("hidden");

};
