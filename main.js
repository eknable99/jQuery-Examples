$(document).ready(function () {
    $('html').eq(0).hide();
    $('html').eq(0).fadeIn(1000);
});

$(document).ready(function () {
    var $speech = $('div.speech')
    var defaultColor = $speech.css('background-color');
    $('div.speech p').mouseover(function () { 
       $speech.css('background-color', 'yellow');
    });
    $('div.speech p').mouseout(function () { 
        $speech.css('background-color', defaultColor);
    });
});

$(document).ready(function () {
    $('h2').click(function() {
        $('h2').animate({
            marginLeft: '20px',
            opacity: "0.25"
        }, 'slow');
    });
});

$(document).ready(function () {
    var $switcher = $("#switcher");
    $(document).keydown(function (e) { 
        var x = $switcher.position();
        switch (e.which) {
            case 37:
                $switcher.css({
                    position: 'absolute',
                    left: x.left
                }).animate({left: x.left -=20});
                break;
            case 38:
                $switcher.css({
                    position: 'absolute',
                    top: x.top
                }).animate({top: x.top -=20});
                break;
            case 39:
                $switcher.css({
                    position: 'absolute',
                    left: x.left
                }).animate({left: x.left +=20});
                break;
            case 40:
                $switcher.css({
                    position: 'absolute',
                    top: x.top
                }).animate({top: x.top+=20});
                break;                                            
            default:
                break;
        }
    });
});