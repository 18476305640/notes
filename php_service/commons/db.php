<?php

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
