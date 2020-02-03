$(document).ready(function(){

    $('.click button').click(function(){
        alert('Activate Alert Message!!!');
    });
    
    $('.hide button').click(function(){
        $('.click .description').hide();
    });
    
    $('.show button').click(function(){
        $('.click .description').show();
    });
    
    $('.toggle button').click(function(){
        $('.toggle .description').toggle();
    });

    $('.slideUp button').click(function(){
        $('.slideUp .description').slideUp("slow");
    });

    $('.slideDown button').click(function(){
        $('.slideUp .description').slideDown("slow");
    });

    $('.slideToggle button').click(function(){
        $('.slideToggle .description').slideToggle("slow");
    });

    $('.fadeOut button').click(function(){
        $('.fadeOut .description').fadeOut("slow");
    });

    $('.fadeIn button').click(function(){
        $('.fadeOut .description').fadeIn("slow");
    });

    $('.addClass button').click(function(){
        $('.addClass .description').addClass("red");
    });

    $('.before button').click(function(){
        $('.before .description p').before("<h3 class='red'>New paragraph before the old paragraph line.</h3>");
    });

    $('.after button').click(function(){
        $('.after .description p').after("<h3 class='red'>New paragraph after the old paragraph line.</h3>");
    });

    $('.append button').click(function(){
        $('.append .description p').append(" This is added next the paragraph.");
    });

    $('.append button').click(function(){
        $('.append .description p').append(" This is added next the paragraph.");
    });

    $('.html button').click(function(){
        $('.html .description p').html("<h3 class='blue'>Replaced a new blue h3 tag.</h3>");
    });

    $('.attr button').click(function(){
        var title = $('em').attr('title');
        $('strong').text(title);
    });
    
    $('.val button').click(function(){
        $('input').val(1000000);
    })

    $('.text button').click(function(){
        $('.text .description p').text('<b>Some</b> new text.');
    })

});
