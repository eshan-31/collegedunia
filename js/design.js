$('#red').click(function () {
    $('#showcase').attr("src", "images/red.jpg");
    $('.dotSelected').removeClass('dotSelected');
    $('#red').addClass("dotSelected");
    $('.colorName').html("Blood Red");
});
$('#grey').click(function () {
    $('#showcase').attr("src", "images/grey.jpg");
    $('.dotSelected').removeClass('dotSelected');
    $('#grey').addClass("dotSelected");
    $('.colorName').html("Classy Grey");
});
$('#silver').click(function () {
    $('#showcase').attr("src", "images/silver.jpg");
    $('.dotSelected').removeClass('dotSelected');
    $('#silver').addClass("dotSelected");
    $('.colorName').html("Shiny Silver");
});
$('#blue').click(function () {
    $('#showcase').attr("src", "images/blue.jpg");
    $('.dotSelected').removeClass('dotSelected');
    $('#blue').addClass("dotSelected");
    $('.colorName').html("Cool Blue");
});

$(document).ready(function () {
    var [width1, width2, width3, width4, width5] = [0, 0, 0, 0, 0];
    var id1 = setInterval(frame1, 20);
    var id2 = setInterval(frame2, 20);
    var id3 = setInterval(frame3, 20);
    var id4 = setInterval(frame4, 20);
    var id5 = setInterval(frame5, 20);

    function frame1() {
        if (width1 >= 87) {
            clearInterval(id1);
        } else {
            width1++;
            $('#critics').width(width1 + '%');
            $('#criticRating').html(width1 * 1 + '%');
        }
    }

    function frame2() {
        if (width2 >= 64) {
            clearInterval(id2);
        } else {
            width2++;
            $('#performance').width(width2 + '%');
            $('#performanceRating').html(width2 * 1 + '%');
        }
    }

    function frame3() {
        if (width3 >= 90) {
            clearInterval(id3);
        } else {
            width3++;
            $('#interior').width(width3 + '%');
            $('#interiorRating').html(width3 * 1 + '%');
        }
    }

    function frame4() {
        if (width4 >= 44) {
            clearInterval(id4);
        } else {
            width4++;
            $('#safety').width(width4 + '%');
            $('#safetyRating').html(width4 * 1 + '%');
        }
    }

    function frame5() {
        if (width5 >= 52) {
            clearInterval(id5);
        } else {
            width5++;
            $('#reliability').width(width5 + '%');
            $('#reliabilityRating').html(width5 * 1 + '%');
        }
    }
});