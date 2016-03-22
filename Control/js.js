$( document ).ready(function() {
/* Tab Functions */
    $('.tabLink').on('click',function(e){
        var tabID = $(this).attr('data-tab');
		$('.tabLink').removeClass('current');
		$('.tabContent').removeClass('current');

		$(this).addClass('current');
		$("#"+ tabID).addClass('current');
	});
    
/* Door Functions */
    
    /* This functions 'unlocks' all doors when the master lock is clicked*/
   $('.alldoors').on('click',function() {
        var locked = $(".locks").attr('src');
        if(locked == "lock.png"){
            $(".locks").attr('src',"unlock.png");
            return false;
        }else if(locked == "unlock.png"){
            $(".locks").attr('src',"lock.png");
            return false; 
        }
    });
    
     /* These functions change individual doors to either locked or unlocked when image is clicked*/
    $('.door1').on('click',function() {
        var locked = $(".door1").attr('src');
        if(locked == "lock.png"){
            $(".door1").attr('src',"unlock.png");
            return false; 
        }else if(locked == "unlock.png"){
            $(".door1").attr('src',"lock.png");
            return false; 
        }
    });  
     $('.door2').on('click',function() {
        var locked = $(".door2").attr('src');
        if(locked == "lock.png"){
            $(".door2").attr('src',"unlock.png");
            return false;
        }else if(locked == "unlock.png"){
            $(".door2").attr('src',"lock.png");
            return false; 
        }
    }); 
    
/* Light Functions*/
    
    /* This functions changes all the range sliders when the master switch slider is changed*/
   $('.lightALL').on('change',function() {
       var lightVal = $(this).val();
       if(lightVal == "0"){
           $('.lightBulb').val("0");
       }else if(lightVal == "1"){
          $('.lightBulb').val("1"); 
       }else{
           $('.lightBulb').val("2");
       }
    });
    
    /* This functions changes all the range sliders when either image is clicked, turning all lights on or off*/
    $('.masterswitch').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.lightBulb').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.lightBulb').val("0");
        }
    });
    
    /* These functions change individual range sliders when either image is clicked, turning all lights on or off*/
     $('.light1').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light1').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light1').val("0");
        }
    });
    $('.light2').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light2').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light2').val("0");
        }
    });
    $('.light3').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light3').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light3').val("0");
        }
    });
    $('.light4').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light4').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light4').val("0");
        }
    });
    $('.light5').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light5').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light5').val("0");
        }
    });
    $('.light6').on('click',function(){
        var lightStatus = $(this).attr('src');
        if (lightStatus == "lightON.png"){
            $('.light6').val("2");
        }else if(lightStatus == "lightOFF.png"){
            $('.light6').val("0");
        }
    });
          
});

   