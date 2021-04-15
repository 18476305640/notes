
<?php
require_once("../commons/db.php");
$PDO = getDB();

//析出post数组成若干变量
extract($_POST);

$username = $PDO->quote($username);
$password = $PDO->quote($password);
$sql = "select * from user where username={$username} and password={$password}";
$res = $PDO->query($sql);
$res->setFetchMode(PDO::FETCH_ASSOC);
$status = $res->fetch();

if($status) {
    echo '登录成功!';
}else {
    echo '登录失败！';
    header("refresh: 2; url='../../page/login.html'");

}