<?php
require_once "../commons/root.php";
require_once "../commons/dao/item.php";

//判断账号是否有效
$result = root($_GET['user']);
//当前账号
$currentUser = $result['data']['user'];
if($result['code'] == 666) {
    //账号有效，获取信息返回
    $user = 1;
    $itemx = array('user'=>$user);
    $res = getByLimitNumber($itemx);
    echo json_encode($res);
 
}else {
    return json_encode(array('code'=>444,'data'=>null));
}