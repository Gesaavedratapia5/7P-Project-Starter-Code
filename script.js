$("button").click(function() {
    let question1 = $(".one").val();
    let question2 = $(".two").val();
    let question3 = $(".three").val();
    let variable = (question3 * 1456);

    $(".fortune-display").text( question1 + ", you will play " + question2+ ", " + variable + " hours by the year 2050." );
    console.log(question1, question2, question3);
});

$(".fortune-display").hide();
$(".button1").click(function() {
    $(".sec1").hide();
    $(".fortune-display").show();
});