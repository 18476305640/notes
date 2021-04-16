<?php

$PDO = getDB();
function getAllByUserId($uid) {
    //获取数据库连接 $pdo
    global $PDO;
    //析出post数组成若干变量

    $sql = "select * from note where isdel=0 and user=".$uid;

    $res = $PDO->query($sql);
    $res->setFetchMode(PDO::FETCH_ASSOC);
    while($item_item = $res->fetch()) {
        $result[] = $item_item;
    }
    return $result;
}
// function update($item) {
//     global $PDO;
//     $sql = "update item set ";
//     if($item['title']) {
//         $sql+=" title=".$item['title']." ";
//     }
//     if($item['content']) {
//         $sql+=" content=".$item['content']." ";
//     }
//     if($item['sign']) {
//         $sql+=" sign=".$item['sign']." ";
//     }
//     if($item['isdel']) {
//         $sql+=" isdel=".$item['isdel']." ";
//     }
//     if($item['update']) {
//         $sql+=" update=".$item['update']." ";
//     }
//     $sql+=" where id=".$item['id']." ";

//     return $PDO->exec($sql);
// }
// function item_insert($item) {
//     global $PDO;
//     //日期如何添加到数据库
//     $sql = "INSERT INTO item (USER,note,title,content,SIGN,isdel,notes_create,notes_update) VALUES (?,?,?,?,0,0,NOW(),NOW());";
//     $template = $PDO->prepare($sql);
//     $template->bindValue(1,1);
//     $template->bindValue(2,1);
//     $template->bindValue(3,$item['user']);
//     $template->bindValue(4,$item['content']);
    
//     return $template->execute();
// }
// function remote($id) {
//     global $PDO;

//     if($id) {
//         $sql = "delete from item where id=".$id;
//         return  $PDO->exec($sql);
//     }
// }
// function getByLimit($item) {
//     global $PDO;
//     $sql = "select * from item where isdel=0 and user=".$item['user']." limit ".$item['start'].",".$item['number'];
//     $res = $PDO->query($sql);
//     $res->setFetchMode(PDO::FETCH_ASSOC);
//     $result = null;
//     while($item_item = $res->fetch()) {
//         $result[] = $item_item;
//     }
//     return $result;
// }
// function getByLimitNumber($item) {
//     global $PDO;
//     $sql = "select count(*) as lognumber from item where isdel=0 and user=".$item['user'];
//     $res = $PDO->query($sql);
//     $res->setFetchMode(PDO::FETCH_ASSOC);

//     return $res->fetch();
// }