$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#blueBox").css("left",$("#blueBox").offset().left - 15);

    //moves right
    } else if (event.which === 39) {
       $("#blueBox").css("left",$("#blueBox").offset().left + 15);
    }
    else if (event.which === 38) {
        $("#blueBox").css("top",$("#blueBox").offset().top - 15);

    //moves top
    } else if (event.which === 40) {
       $("#blueBox").css("top",$("#blueBox").offset().top + 15);
    }
    else if (event.which === 65)
    {$("#redBox").css("left",$("#redBox").offset().left - 10);
    } else if (event.which === 68)
    {$("#redBox").css("left",$("#redBox").offset().left + 10);
    }else if (event.which === 87)
    {$("#redBox").css("top",$("#redBox").offset().top - 10);
    } else if (event.which === 83)
    {$("#redBox").css("top",$("#redBox").offset().top + 10);
    } else {
        return;
    }
    
});
