import request from '/js/commons/request.js';  //导入请求
import '/resource/js/jquery-3.5.1.js';  //导入jquery框架
import md5 from '/resource/js/md5.js';   //导入md5进行加密操作
$(function() {
    $("button[type=button]").click(function() {
        console.log("tologining...");
        var user = $("input[name='username']").val();
        //直接md5加密，然后进行登录
        var lock = md5($("input[name='password']").val());

        //登录操作
        var status = request("post","php_service/login/login.php",{user,lock},500).code == 666;
        if(status) {
            console.log("登录成功！");
        }else {
            console.log("登录失败！");
        }
 
    });
    
})
