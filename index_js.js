
$(document).ready(function(){

    $('#tab1').on('click', function(){
        showTab('#tab1');
        showSection('#section1');
    });
    $('#tab2').on('click', function(){
        showTab('#tab2');
        showSection('#section2');
    });
    $('#tab3').on('click', function(){
        showTab('#tab3');
        showSection('#section3');
    });
    $('#tab5').on('click', function(){
        showTab('#tab5');
        showSection('#section5');
    });
    showTab('#tab1');
    showSection('#section1');

});

function showTab(tab_id) {
    $('nav li').removeClass();
    $(tab_id).addClass('active');
}

function showSection(section_id) {
    $('section').hide();
    $(section_id).show();
}

$( document ).ready(function() {
  showItems();
  $(".left").click(function() {
    shift(-1);
  });
  $(".left").css('cursor','pointer');
  $(".right").click(function(){
    shift(1)
  });
  $(".right").css('cursor','pointer');
});
function shift (dir){
  var items=$("#gallery").find("li");
  if (dir==-1){
    var last_item=items.last();
    $("#gallery").prepend(last_item);
  }
  if (dir==1){
    var first_item=items.first();
    $("#gallery").append(first_item);
  }
  showItems();
}
function showItems(){
  var items=$("#gallery").find("li");
  items.hide();
  items.eq(0).show();
}
