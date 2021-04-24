$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChileNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChileNumber).text())
        $("#image").attr("src",randomChileNumber+".jpg");
    });
});
