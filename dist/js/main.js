/********************************
 *
 * Mobile Menu
 *
 ********************************/
$(".mobile-menu-trigger").click(function() {
  $(this).toggleClass("active");
  $(".mobile-menu-wrapper").toggleClass("active");
});

/********************************
 *
 * Login Button
 *
 ********************************/
$(".login-button").click(function(e) {
  e.preventDefault();
  $(".modal-wrapper").show();
});

/********************************
 *
 * Modal Close Button
 *
 ********************************/
$("#modal-close").click(function() {
  $(".modal-wrapper").hide();
});

/********************************
 *
 * Handle Tab Click
 *
 ********************************/
function tabAction() {
  $(".tabbed-widget .content-wrapper").each(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
}

/********************************
 *
 * Tab Event Listener
 *
 ********************************/
$(".tab").click(function(e) {
  e.preventDefault();
  $(this).addClass("active");
  $(this)
    .siblings()
    .removeClass("active");
  var visibleTab = $(this).attr("data-target");

  tabAction();
});

$(document).ready(function() {
  $.getJSON("code-test.json", function(data) {
    var rates = [];
    data.sort(function(obj1, obj2) {
      return obj2.earnings - obj1.earnings;
    });
    $.each(data, function(key, val) {
      rates.push(
        "<tr><td class='name-wrapper'>" +
          val.name +
          "</td><td class='apy-wrapper'>" +
          val.apy +
          "</td><td class='earnings-wrapper'>" +
          val.earnings +
          "</td></tr>"
      );
    });
    $("#rates-table").append(rates);
  });
});
