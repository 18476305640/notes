<?php

$PDO = getDB();
function getById($id) {
    //获取数据库连接 $pdo
    global $PDO;
    //析出post数组成若干变量

    $sql = "select * from item where id=".$id;

    $res = $PDO->query($sql);
    $res->setFetchMode(PDO::FETCH_ASSOC);
    if($res->fetch()) {
        return $res;
    }else {
        return null;
    }
}
function update($item) {
    

    global $PDO;
    $sql = "update item set ";
    if(array_key_exists('title',$item)) {
        $sql.=" title='".$item['title']."' ,";
    }
    if(array_key_exists('content',$item)) {
        $sql.=" content='".$item['content']."' ,";
    }
    if(array_key_exists('sign',$item)) {
        $sql.=" sign='".$item['sign']."' ,";
    }
    if(array_key_exists('isdel',$item)) {
        $sql.=" isdel='".$item['isdel']."' ,";
    }
    if(array_key_exists('update',$item)) {
        $sql.=" update='".$item['update']."' ,";
    }
    $sql = substr($sql,0,-1);
    $sql.=" where id=".$item['id']." and note =".$item['note'];

    return $PDO->exec($sql);
}
function insert($item) {
    global $PDO;
    //日期如何添加到数据库
    $sql = "INSERT INTO item (USER,note,title,content,SIGN,isdel,notes_create,notes_update) VALUES (?,?,?,?,0,0,NOW(),NOW());";
    $template = $PDO->prepare($sql);
    $template->bindValue(1,$item['user']);
    $template->bindValue(2,$item['note']);
    $template->bindValue(3,$item['title']);
    $template->bindValue(4,$item['content']);
    return $template->execute();
}
function remote($id) {
    global $PDO;

    if($id) {
        $sql = "delete from item where id=".$id;
        return  $PDO->exec($sql);
    }
}
function getByLimit($item) {
    global $PDO;
    $sql = "select * from item where isdel=0 and user=".$item['user']." and note=".$item['note']." limit ".$item['start'].",".$item['number'];
    $res = $PDO->query($sql);
    $res->setFetchMode(PDO::FETCH_ASSOC);
    $result = null;
    while($item_item = $res->fetch()) {
        $result[] = $item_item;
    }
    return $result;
}
function getByLimitNumber($item) {
    global $PDO;
    $sql = "select count(*) as lognumber from item where isdel=0 and user=".$item['user'];
    $res = $PDO->query($sql);
    $res->setFetchMode(PDO::FETCH_ASSOC);
    return $res->fetch();
}