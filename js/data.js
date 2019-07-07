function loadXMLDoc()
{
    //setTimeout(function(){ alert("Hello"); }, 1000);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var str = xmlhttp.responseText;
            var val= new Array();
            var obj = JSON.parse(str);//JSON字符串转JSON对象
            val=obj[0].netWeigh;
            document.getElementById(1).innerHTML = ( "0000000000000000" + document.getElementById(1).innerText ).substr( -6 );
            document.getElementById(2).innerHTML = obj[0].fundName;
            document.getElementById(3).innerHTML = obj[0].fundIncre;
            document.getElementById(4).innerHTML = obj[0].fundType;
            document.getElementById(5).innerHTML = obj[0].fundRisk;
            // var receiveDate = (new Date()).getTime();
            // var responseTimeMs = receiveDate - sendDate;
            // alert(responseTimeMs);
        }
    }
    //var sendDate = (new Date()).getTime();
    // xmlhttp.open("GET","http://47.100.120.235:8081/check",true);
    xmlhttp.open("GET","http://47.100.120.235:8081/mainInfo?fundId="+document.getElementById(1).innerText,true);
    //xmlhttp.open("GET","http://47.100.120.235:8081detailInfo?fundId="+document.getElementById(1).innerText,true);
    //xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
}

function f () {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
                var str = xmlhttp.responseText;
                var val= new Array();
                var obj = JSON.parse(str);//JSON字符串转JSON对象
                val=obj[0].netWeigh;
                alert(document.getElementById(6).innerHTML = val[0]);
        }
        xmlhttp.open("GET","http://47.100.120.235:8081detailInfo?fundId="+document.getElementById(1).innerText,true);
        xmlhttp.send();
    }

}