$("select").change(function() {
    var str = "";
    $("select option:selected").each(function() {
        str+=$(this).text() + " ";
    });
    $("div").text(str);
}).change();


$('select').on('click', function() {
    $("div").animate({
        height:"+=50px",
        width:"+=50px"
    }, 500, moved);
})

function moved() {
    console.log("Div moved")
}
