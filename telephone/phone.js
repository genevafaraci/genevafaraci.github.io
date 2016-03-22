$(document).ready(function() {
    $('.button').on('click',function() {
        var tempnum = $(this).html();
        var currentphonenum = $('#phonenumber').html();
        var newphonenum = currentphonenum + tempnum;
        var numlength = newphonenum.length;
        if (numlength == 3) {
            newphonenum = "(" + newphonenum + ") "; 
        }
        if (numlength == 9){
            newphonenum = newphonenum + " - ";
        }
        if (numlength == 17){
            newphonenum = currentphonenum; 
            $('.operator').on('click',function(){
                var specialchar = $(this).html();
                newphonenum = currentphonenum + specialchar;
                $('#phonenumber').html(newphonenum);
            });
        }
        if (numlength == 18){
            newphonenum = currentphonenum + tempnum
        }
        if (numlength == 22){
            newphonenum = currentphonenum;
        }
        $('#phonenumber').html(newphonenum);
    });
   
});

var numPhone = "";
function redial() {
    "use strict";
    numPhone = "";
    document.getElementById("phonenumber").innerHTML = numPhone;
}
var audio = new Audio('rotaryphonedialing.wav');
function call() { audio.play();}
