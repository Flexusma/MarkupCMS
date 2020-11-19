var navbarHeight = $('.navbar').height();

$(window).scroll(function() {
    var navbarColor = "255,215,0";//color attr for rgba
    var smallLogoHeight = 50;
    var bigLogoHeight = 100;


    var smallLogoEndPos = 0;
    var smallSpeed = (smallLogoHeight / bigLogoHeight);

    var ySmall = ($(window).scrollTop() * smallSpeed);

    var navOpacity = ySmall / smallLogoHeight;
    if  (navOpacity > 0.6) { navOpacity = 1; }
    if (navOpacity < 0 ) { navOpacity = 0; }
 //   var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  //  $('.navbar').css({"background-color": navBackColor});


    var shadowOpacity = navOpacity * 0.4;
    if ( ySmall > 1) {
        $('.navbar').css({"box-shadow": "0 5px 7px rgba(0,0,0," + shadowOpacity + ")"});
    } else {
        $('.navbar').css({"box-shadow": "none"});
    }



});