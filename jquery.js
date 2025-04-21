// $("a").attr("href", "www.shikbeshobai.com");
// $("a").attr("href");
// $("a").removeAttr("href");
// $("h1").addClass("style1 style2");

// $("button").click(function(){
//     $("h1").toggleClass("style1")
// })

// $(".mybutton").click(function(){
//     var value =this.innerHTML;
//     $("h1").text(value + "is clicked")
// })

$("#loginButton").click(function()
{
   let password1 =$("#pass1").val();
   let password2 =$("#pass2").val();

   if(password1 !="" && password2 !="")
   {
        if(password1 == password2){
            alert("Successfully Loged")
        }else{
            alert("password mismatch")
        }

   }else{
    alert("Please Enter Password")
   }
})