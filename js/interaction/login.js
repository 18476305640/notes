/*
 * @Author: your name
 * @Date: 2021-04-15 10:58:37
 * @LastEditTime: 2021-04-16 10:48:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\js\interaction\login.js
 */
import request from '/js/commons/request.js';  //导入请求
import '/resource/js/jquery-3.5.1.js';  //导入jquery框架
import cookie from '/resource/js/cookie-utils.js';  //导入jquery框架
import md5 from '/resource/js/md5.js';   //导入md5进行加密操作
import root from '/js/commons/root.js'; //导入账号查看器
$(function() {

    //used
    //查看是否存在账号
    if(root().isLogin) {
        //存在账号
        $("#used").toggleClass("hiddle").click(function() {
            window.location.href="/page/play.html";
        });

    }


    $("#toLogin").click(function() {
        //禁用登录按钮
        $("#toLogin").prop("disabled",true);
        var user = $("input[name='username']").val();
        //直接md5加密，然后进行登录
        var lock = md5($("input[name='password']").val());
        var loginResult = request("post","php_service/login/login.php",{user,lock},500);

        //登录操作
        if(loginResult.code == 666) {
            console.log("登录成功！");
            cookie.set("user",loginResult.data.user,60*60*24*30,"/");
            cookie.set("lock",loginResult.data.lock,60*60*24*30,"/");
            setTimeout(function() {
                window.location.href="/page/play.html";              
            },1500);
        }else {
            console.log("登录失败！");
            setTimeout(function() {
                window.location.href="/page/login.html";              
            },1500);

        }
        //开启登录按钮
        $("button[type=button]").prop("disabled",false);

 
    });
    
})
