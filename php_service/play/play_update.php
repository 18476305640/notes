<?php


require_once "../commons/root.php";
require_once "../commons/dao/item.php";

// 判断账号是否有效
$result = root($_POST['user']);
//当前账号
$currentUser = $result['data'];

if($result['code'] == 666) {
    
    //账号有效，获取信息返回
    $update_data = array('user'=>1,'note'=>$_POST['note'],'id'=>$_POST['id'],'title'=>$_POST['title'],'content'=>$_POST['content']);
    $update_status = update($update_data);
    echo json_encode(array('code'=>666,'data'=>$update_status));
    

}else {
    
    return json_encode(array('code'=>444,'data'=>null));
}




