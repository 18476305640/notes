<?php
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
    echo json_encode(array("code"=>666,"data"=>array("user"=>$username,"lock"=>md5($password))));
}else {
    //登录失败h
    echo json_encode(array("code"=>444,"data"=>""));
}