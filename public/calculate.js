function calculate() {
    var sum = 0;
    var a1 = document.getElementsByName("answer1");
    var a2 = document.getElementsByName("answer2");
    var a3 = document.getElementsByName("answer3");
    var a4 = document.getElementsByName("answer4");
    var a5 = document.getElementsByName("answer5");
    var a6 = document.getElementsByName("answer6");
    var a7 = document.getElementsByName("answer7");
    var a8 = document.getElementsByName("answer8");
    var a9 = document.getElementsByName("answer9");
    var a10 = document.getElementsByName("answer10");
    
    for(var i=0; i<a1.length; i++) { //1번
        if(a1[i].checked == true)
            sum  += parseInt(a1[i].value);
    }
    for(var i=0; i<a2.length; i++) { //2번
        if(a2[i].checked == true)
            sum  += parseInt(a2[i].value);
    }
    for(var i=0; i<a3.length; i++) { //3번
        if(a3[i].checked == true)
            sum  += parseInt(a3[i].value);
    }
    for(var i=0; i<a4.length; i++) { //4번
        if(a4[i].checked == true)
            sum  += parseInt(a4[i].value);
    }
    for(var i=0; i<a5.length; i++) { //5번
        if(a5[i].checked == true)
            sum  += parseInt(a5[i].value);
    }
    for(var i=0; i<a6.length; i++) { //6번
        if(a6[i].checked == true)
            sum  += parseInt(a6[i].value);
    }
    for(var i=0; i<a7.length; i++) { //7번
        if(a7[i].checked == true)
            sum  += parseInt(a7[i].value);
    }
    for(var i=0; i<a8.length; i++) { //8번
        if(a8[i].checked == true)
            sum  += parseInt(a8[i].value);
    }
    for(var i=0; i<a9.length; i++) { //9번
        if(a9[i].checked == true)
            sum  += parseInt(a9[i].value);
    }
    for(var i=0; i<a10.length; i++) { //10번
        if(a10[i].checked == true)
            sum  += parseInt(a10[i].value);
    }
    
    if(sum <= 19){
    	document.getElementById("result").innerHTML = "당신의 점수는 " + sum + " 점입니다.";
    	document.getElementById("status").innerHTML = "당신은 자살 위험도는 낮습니다.";
    }
    if(sum>19 && sum<=29){
    	document.getElementById("result").innerHTML = "당신의 점수는 " + sum + " 점입니다.";
    	document.getElementById("status").innerHTML = "당신은 자살 위험도는 보통입니다. <br> 2주간 증상이 계속될 경우 병원을 가보시기 바랍니다.";
    }
    if(sum>29){
    	document.getElementById("result").innerHTML = "당신의 점수는 " + sum + " 점입니다.";
    	document.getElementById("status").innerHTML = "당신은 자살 위험도는 높습니다.<br>빠른 시일 내에 병원을 찾기를 바랍니다.";
    }
}