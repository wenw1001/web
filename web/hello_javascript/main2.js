$(function(){ 
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var firstDate=document.getElementById("firstDate");
    alert(firstDate);
    var Mon=firstDate.getMonth();
    var Day=firstDate.getDate();
    alert(Mon);

    var topicCount = topic.length; 
    function Print(){
    for(var x=0;x<topicCount;x++){
        //一秒鐘有1000毫秒 
        //每分鐘60秒、每小時60分鐘、每天24小時 
        // var millisecsPerDay = 24*60*60*1000;

        setMonthAndDay(Mon,Day+x*7)
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`); 
        // $("#courseTable").append(`<td>${startDate.toLocaleDateString()}</td>`);
        // $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`);
        $("#courseTable").append(`<td>${startDate.getMonth()+1}/${startDate.getDate()}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        } 

    }

    function changeDate(){
        firstDate=document.getElementById("firstDate");
        Mon=firstDate.getMonth();
        Day=firstDate.getDate();
        print
    }    
    Print();
});