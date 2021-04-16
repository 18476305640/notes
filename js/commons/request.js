/*
 * @Author: your name
 * @Date: 2021-04-15 09:00:14
 * @LastEditTime: 2021-04-16 09:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htdocs\mynote\js\commons\request.js
 */
import '../../resource/js/jquery-3.5.1.js';  //在js中导入jquery框架
Function.__proto__.wait = function(obj,name,requestNumber) {
    var geted = false;
    var number = 0;
    var geting = function() {
        if(obj[name]) {
            geted=true;
            return obj[name];
        }
        if(number>requestNumber) {
            return null;
        }
        number++;
        if(!geted && number>requestNumber) {
            return null;
        }
        geting();

    };
    return geting();    
}
export default function(method,url,data,waitNumber="600") {
    if(url == null && method != null) {
        throw new Error("request 参数错误！");
    }
    var obj = {
        ajaxResult:$.ajax({
            url:"http://localhost/"+url,
            type:method,
            data:data,
            dataType:'json',
            async:false,
            success:function(resource){
                return resource;
            },
            error:function(errormsg){
                console.log("请求失败");
                return null;
            }
        }).responseJSON
    }
    return Function.wait(obj,'ajaxResult',waitNumber);
    


}

