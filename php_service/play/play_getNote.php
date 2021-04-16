<?php

require_once "../commons/root.php";
require_once "../commons/dao/note.php";

//判断账号是否有效
$result = root($_GET['user']);
//当前账号
$currentUser = $result['data'];
if($result['code'] == 666) {
    //账号有效，获取信息返回
    $notes = getAllByUserId(1); //需由user转
    echo json_encode(array('code'=>666,'data'=>$notes ));

}else {
    return json_encode(array('code'=>444,'data'=>null));
}



