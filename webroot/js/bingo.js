$(function(){
    var scroll = false;
    var scrollInterval;
    var end = false;
    console.log(list);
    $('body').keydown(function(e){
        if (e.keyCode == 13 && end == false) {
            if (scroll == false) {
                startScroll();
                scroll = true;
            } else {
                stopScroll();
                scroll = false;
            }
        }
    });
    
    function startScroll() {
         $('.number').css({
              width: 600,
              height: 600,
              fontSize: '400px',
              opacity: 1,
         });
         scrollInterval = setInterval(function(){
             $('#main_image').hide();
             $('.number_div').hide();
             var key = Math.ceil((Math.random() * 75));
             $('#number_div_' + key).show();
         }, 100);
    }
    
    function stopScroll() {
        clearInterval(scrollInterval);
        var listLength = list.length;
        var key = Math.floor((Math.random() * listLength));
        var value = list[key];
        list.splice(key,1);
        $('.number_div').hide();
        $('#number_div_' + value).show();
        var checkNumber = value;
        $('.ball').each(function() {
            var nowNumber = $(this).text();
            $(this).text(checkNumber);
            checkNumber = nowNumber;
        });
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#0ff');
        }, 300);
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#000');
        }, 600);
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#0ff');
        }, 900);
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#000');
        }, 1200);
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#0ff');
        }, 1500);
        
        setTimeout(function(){
            $('#number_div_' + value).css('color', '#000');
        }, 1800);
        
        setTimeout(function(){
              $('#number_div_' + value + ' .number').animate({
                  width: 100,
                  height: 100,
                  fontSize: '70px',
                  opacity: '0.6',
              }, 1000);
        }, 2500);
        
        if (list.length == 0) {
            end = true;
        }
    }
});