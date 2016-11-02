/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var masterServiceBaseURL = "http://missionbhagiratha.telangana.gov.in/tdwsp/mastersServices/";
$(document).ready(function () {
 console.log("in js");

 $('#submit').click(function (event) {
	
console.log("in submit");
    var strVal = $('#password').val();
    var strMD5 = $.md5(strVal);
	console.log(strMD5)
    $.ajax({
       
        type: "GET",
        url: masterServiceBaseURL+'GetDirectLogin?emplgid='+$('#username').val()+ "&emplgkey=" + strMD5,
        success: function (data)
        {
//            data = JSON.parse(data);
		
                console.log(data);
                
            if (data.length > 0) {
//                                   alert('login success');
//                sessionStorage.setItem("userData", JSON.stringify(data));
                window.location = "/tdwspweb/Login.html";
            }
            else{
                alert('fail');
            }

        },
        error: function (x, e)
        {
            alert(x.readyState + " " + x.status + " " + e.msg);
        }


    });
});
});


