/*
 * @Author: your name
 * @Date: 2021-04-15 10:34:28
 * @LastEditTime: 2021-04-15 13:57:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\js\interaction\index.js
 */
    import '../../resource/js/jquery-3.5.1.js' //导入jquery
    import request from '../commons/request.js' //导入请求模块
    import cookie from '../../resource/js/cookie-utils.js' //导入操作cooKie的工具
    $(function() {
        if(cookie.get("notelock")) {
            //将要使用ajax实现登录，并且将要修改登录界面也用ajax！！！！！！！！！！！！！！！！
        }else {
            window.open("/page/login.html");
        }
        
        
    })

