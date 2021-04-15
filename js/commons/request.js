/*
 * @Author: your name
 * @Date: 2021-04-15 09:00:14
 * @LastEditTime: 2021-04-15 10:42:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htdocs\mynote\js\commons\request.js
 */
import '../../resource/js/jquery-3.5.1.js'  //在js中导入jquery框架
export default function request(method,url,data) {
    method=method?method:'port';
    if(url == null) {
        console.log("222");
        throw new Error("你url为空！");
    }
    $.ajax({
        url:"http://localhost/"+url,
        type:method,
        data:data,
        dataType:'json',
        success:function(resource){
            return {
                code: 'success',
                data: resource

            }
        },
        error:function(errormsg){
            return {
                code: 'error',
                data: errormsg

            }
        }
    })


}