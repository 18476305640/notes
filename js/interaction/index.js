/*
 * @Author: your name
 * @Date: 2021-04-15 10:34:28
 * @LastEditTime: 2021-04-16 12:54:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\js\interaction\index.js
 */


import root from '/js/commons/root.js' //权限查看器
var loginData =root()
if(loginData.isLogin) {
    console.log("已登录");
}else {
    console.log("未登录");
}
    
