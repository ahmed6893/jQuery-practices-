// $("a").attr("href", "www.shikbeshobai.com");
// $("a").attr("href");
// $("a").removeAttr("href");
// $("h1").addClass("style1 style2");

// $("button").click(function(){
//     $("h1").toggleClass("style1")
// })

$(".mybutton").click(function(){
    var value =this.innerHTML;
    $("h1").text(value + "is clicked")
})