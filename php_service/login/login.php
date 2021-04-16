<?php
/*
 * @Author: your name
 * @Date: 2021-04-15 12:49:07
 * @LastEditTime: 2021-04-16 10:11:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\php_service\login\login.php
 */
require_once("../commons/db.php");
$PDO = getDB();

//析出post数组成若干变量
extract($_POST);
$username = $PDO->quote($user);
$password = $PDO->quote($lock);
$sql = "select * from user where username={$username} and password={$password}";
$res = $PDO->query($sql);
$res->setFetchMode(PDO::FETCH_ASSOC);
$status = $res->fetch();

if($status) {
    //登录成功
    echo json_encode(array("code"=>666,"data"=>array("user"=>$user,"lock"=>$lock)));

}else {
    //登录失败h
    echo json_encode(array("code"=>444,"data"=>""));
}