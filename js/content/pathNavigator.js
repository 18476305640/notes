/*
 * @Author: your name
 * @Date: 2021-04-15 11:37:40
 * @LastEditTime: 2021-04-15 12:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\mynote\js\content\getPath.js
 */
export default function(file) {
    let fileName = this.file.name.lastIndexOf(".");//取到文件名开始到最后一个点的长度
    let fileFormat = this.file.name.substring(fileName + 1, fileNameLength);//截
    console.log("路径导航器");
    
    
    //文件名工具
    console.log(fileName);
    console.log(fileFormat);

}