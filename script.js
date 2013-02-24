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
