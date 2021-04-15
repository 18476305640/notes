<?php
/*
 * @Author: your name
 * @Date: 2021-04-15 12:51:08
 * @LastEditTime: 2021-04-15 13:30:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Xclientd:\App\static\App\php\httpd-2.4.46-o111j-x64-vc15\Apache24\htdocs\php_service\commons\db.php
 */
function getDB($dbname="notes") {
  //解决中文乱码
  header('content-type:text/html;charset=utf-8');
  //php连接操作
  //连接成功返回一个POD对象
  try {
    $pdo=new PDO("mysql:host=localhost;dbname=$dbname","root","3333");
    $pdo->query('set names utf8');
  }catch(PDOException $e){
    echo $e->getMessage();
  }
  return $pdo;

}
