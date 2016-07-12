function changeAbout(slide) {
    
    var activeSlide;
    
    if($('#firstInfoSection').hasClass('active')) { 
        console.log("hit");
        if(slide == 1) {
            return;
        }
        activeSlide = "firstInfoSection";
    }
    else if($('#secondInfoSection').hasClass('active')) {
        console.log("hit");
        if(slide == 2) {
            return;
        }
        activeSlide = "secondAboutSlide";
    }
    else if($('#thirdInfoSection').hasClass('active')) {
        console.log("hit");
        if(slide == 3) {
            return;
        }
        activeSlide = "thirdInfoSection";
    }
    else if($('#fourthInfoSection').hasClass('active')) {
        console.log("hit");
        if(slide == 4) {
            return;
        }
        activeSlide = "fourthInfoSection";
    }

    removeClass("#firstInfoSection", "active");
    removeClass("#secondInfoSection", "active");
    removeClass("#thirdInfoSection", "active");
    removeClass("#fourthInfoSection", "active");
    
    $('#' + activeSlide).fadeOut("slow", showDiv(slide));
    
} 

function removeClass(elementName, className) {
    console.log("removeclass");
    $(elementName).removeClass(className);
}

function showDiv(slide) {
    switch(slide) {
        case 1: {
            console.log("showDiv");
            $('#firstInfoSection').removeClass('hidden');
            $('#firstInfoSection').fadeIn("slow");
            $('#firstInfoSection').addClass('active');
            break;
        }
        case 2: {
            console.log("showDiv");
            $('#secondInfoSection').removeClass('hidden');
            $('#secondInfoSection').fadeIn("slow");
            $('#secondInfoSection').addClass('active');
            break;
        }
        case 3: {
            console.log("showDiv");
            $('#thirdInfoSection').removeClass('hidden');
            $('#thirdInfoSection').fadeIn("slow");
            $('#thirdInfoSection').addClass('active');
            break;
        }
        case 4: {
            console.log("showDiv");
            $('#fourthInfoSection').removeClass('hidden');
            $('#fourthInfoSection').fadeIn("slow");
            $('#fourthInfoSection').addClass('active');
            break;
        }
    }
}
