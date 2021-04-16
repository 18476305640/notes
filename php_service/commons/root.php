<?php
require_once("../commons/db.php");
function root($userdata) {
    $PDO = getDB("notes");
    //析出post数组成若干变量
    $username = $PDO->quote($userdata['user']);
    $password = $PDO->quote($userdata['lock']);
    $sql = "select * from user where username={$username} and password={$password}";
    $res = $PDO->query($sql);
    $res->setFetchMode(PDO::FETCH_ASSOC);
    $status = $res->fetch();

    if($status) {
        return  array("code"=>666,"data"=>array("user"=>($userdata['user']),"lock"=>($userdata['lock'])));

    }else {
        //登录失败h
        return array("code"=>444,"data"=>"");
    }
}
