/*
 * @Author: your name
 * @Date: 2021-04-16 12:31:09
 * @LastEditTime: 2021-04-16 12:52:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\js\commons\root.js
 */
import '/resource/js/jquery-3.5.1.js' //导入jquery
import request from '/js/commons/request.js';  //导入请求
import cookie from '/resource/js/cookie-utils.js' //导入操作cooKie的工具
export default function() {
    var result = {isLogin:false,data:null};
    var user = cookie.get("user");
    var lock = cookie.get("lock");
    if(user) {
        //检验有效性
        var loginResult = request("post","php_service/login/login.php",{user,lock},500);
        //是否已登录
        result.isLogin=true;
        result.data = {user,lock};
    }    
    return result;

}