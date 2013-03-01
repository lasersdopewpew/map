var way_visible = false;
var layers_moved = false;

// Определим свои функции добавления/удаления класса, так как те, что в jQuery не работают для SVG
jQuery.fn.myAddClass = function (classTitle) {
  return this.each(function() {
    var oldClass = jQuery(this).attr("class");
    oldClass = oldClass ? oldClass : '';
    jQuery(this).attr("class", (oldClass+" "+classTitle).trim());
  });
}
jQuery.fn.myRemoveClass = function (classTitle) {
  return this.each(function() {
      var oldClass = jQuery(this).attr("class");
      var startpos = oldClass.indexOf(classTitle);
      var endpos = startpos + classTitle.length;
      var newClass = oldClass.substring(0, startpos).trim() + " " + oldClass.substring(endpos).trim();
      if (!newClass.trim())
        jQuery(this).removeAttr("class");
      else
        jQuery(this).attr("class", newClass.trim());
  });
}

jQuery(document).ready( function() {
  // Получаем доступ к SVG DOM
  window.svgdom = document.getElementById('imap'); 


})


function show_way(){
  if (!way_visible){
    //$("#Way", svgdom).addClass("fillred");
    $("#layer6", svgdom).attr("class", "oldclass");
    hide_button.innerHTML = '<a href="#">Скрыть пути эвакуации</a>';
    way_visible = true;
  }
  else {
    //$("#Way", svgdom).removeClass("fillred"); 
    $("#layer6", svgdom).attr("class", "oldclass hidden");
    hide_button.innerHTML = '<a href="#">Показать пути эвакуации</a>';
    way_visible = false;
  }
}

$('#hide_button').on({
    mouseenter: function() {
        $("#layer6", svgdom).attr("class", "oldclass");
    },
    mouseleave: function() {
      if (!way_visible)
        $("#layer6", svgdom).attr("class", "oldclass hidden");
    }
});

function draw_shit(){
  // draw borders
  var xmlns = "http://www.w3.org/2000/svg";

  var coords = "M 0, 0";
  coords += " M 270, 970";
  coords += " l 10, -123";
  coords += " l -20, -300";
  coords += " l 85, -100";
  coords += " l 125, 20";


  var g = document.createElementNS (xmlns, "g");

  var path = document.createElementNS (xmlns, "path");
  path.setAttributeNS (null, 'stroke', "#000000");
  path.setAttributeNS (null, 'stroke-width', 10);
  path.setAttributeNS (null, 'stroke-linejoin', "round");
  path.setAttributeNS (null, 'd', coords);
  path.setAttributeNS (null, 'fill', "none");
  path.setAttributeNS (null, 'opacity', 1.0);
  g.appendChild (path);
  
  var svgContainer = document.getElementById ("imap");
  svgContainer.appendChild (g);  

}

/*
$(function(){
    $('path, rect').hover(function(){
          var p = jQuery(this);
          var position = p.position();
          var tooltip = document.getElementById("tooltipspan");
          tooltip.innerHTML = jQuery(this).attr("descr");
          tooltip.style.top = position.top+10+"px";
          tooltip.style.left = position.left+ $("this").width() +"px";
          tooltip.style.display = "block";
    },
    function(){
      document.getElementById("tooltipspan").style.display = "none";
    });
});
*/

$("path, rect").on({
  click: function(){
  },
  mouseenter: function(){
              var p = jQuery(this);
          var position = p.position();
          var tooltip = document.getElementById("tooltipspan");
          tooltip.innerHTML = jQuery(this).attr("descr");
        // $("selector").css('top', '50px');
          tooltip.style.top = position.top+10+"px";
          tooltip.style.left = position.left+ $("this").width() +"px";
          tooltip.style.display = "block";
  },
  mouseleave: function(){
    document.getElementById("tooltipspan").style.display = "none";
  }});

$("#tooltipspan").hover(
  function () {
    tooltip.style.display = "block";
  },
  function () {
  }
);