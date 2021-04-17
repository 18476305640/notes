import request from '/js/commons/request.js';  //导入请求
import '/resource/js/jquery-3.5.1.js';  //导入jquery框架
import root from '/js/commons/root.js' //权限查看器
import md5 from '/resource/js/md5.js';   //导入md5进行加密操作
$(function() {
    var loginData =root()

    var limit = {
        start:0,
        number:1,
        user: loginData.data,
        record:0,
        note:1
    };
    if(loginData.isLogin) {
        //--------账号登录状态正常---------
        //获取分类显示
        var notes = {
            user:{
                user:loginData.data.user,
                lock:loginData.data.lock
            }
        }
        var noteData = request("get","php_service/play/play_getNote.php",notes);
        if(noteData.code==666) {
            //获取到note数据noteData.data，下面是显示
            
            for(var i=0,item=noteData.data[i];i<noteData.data.length;item=noteData.data[++i]) {
                $("#notes").append("<option value='"+item.id+"'>"+item.name+"</option>");
            }
        }else {
            $("#notes").html("<option value='-1'>--空空--</option>");
        }  
        //监听notes的change事件
        $("#notes").change(function() {
            //修改limit中的note值
            limit.note = $("#notes").val();
            limit.start=0;
            show(limit);
        })
    
        //显示内容
        show(limit);
        $("#next").click(function() {
            limit.start++;
            var state = show(limit);
            if(state == -1) {
                limit.start--;
            }
        })
        $("#resetCurrent").click(function() {
            limit.start=0;
            show(limit);

        });
        $("#add").dblclick(function() {

            var page_data = getPage();
            var insert_data = {
                user: {
                    user:loginData.data.user,
                    lock:loginData.data.lock
                },
                note:limit.note,
                title:page_data.title,
                content:page_data.content
            };
            var state = request("post","php_service/play/play_insert.php",insert_data);
            if(state) {
                alert("添加成功！");
            }
            
        });

        $("#toToggle").click(function() {
            setTimeout(function() {
                window.location.href="/page/login.html";
            },50);
        });
        
        $("#update").click(function() {
            var item_data = getPage();
            var update_data = {
                user: {
                    user:loginData.data.user,
                    lock:loginData.data.lock
                },
                note:limit.note,
                id:item_data.item,
                title:item_data.title,
                content:item_data.content
            };
            console.log(update_data);
            var state = request("post","php_service/play/play_update.php",update_data);
            console.log(state);
            if(state.code == 666) {
                alert("更新成功！");
            }else {
                alert("更新失败！");
            }
        });
        $("#delete").click(function() {
            if(window.confirm("确认要删除吗？")) {
                var item_data = getPage();
                var  delete_data = {
                    user: {
                        user:loginData.data.user,
                        lock:loginData.data.lock
                    },
                    id:item_data.item
                };
                var state = request("post","php_service/play/play_delete.php",delete_data);
                if(state.code == 666) {
                    alert("删除成功！");
                    limit.record = Number.parseInt(getNumberByLimit(limit));
                    
                    if(limit.start >= (limit.record-1)) {
                        limit.start--;
                        show(limit);
                    }
                }else {
                    alert("删除失败！");
                }

            }
        });
            
        








    }else {

        setTimeout(function() {
            window.location.href="/page/login.html";
        },50);
    }




    //--------------- 函数区 -----------------
    function show(show_limit) {
        //查询可查询的记录数
        limit.record = Number.parseInt(getNumberByLimit(show_limit));
        //至少有一条才可以查询
        if(limit.record>0 && (limit.start+1)<=limit.record) {
            var result = request("get","php_service/play/play_get.php",show_limit);
            setPage(result[0].title,result[0].content,result[0].id);


            return 1;
        }else {
            return -1;
        }
        
    }
    //根据limit判定有多少条记录
    function getNumberByLimit(show_limit) {
        var result = request("get","php_service/play/play_getnumber.php",show_limit);
        return result.lognumber;
    }
    //更改page内容
    function setPage(title,content,item_id) {

        $("#title").val(title);
        $("#content").val(content);
        $("#item_id").val(item_id);
    }
    //获取page内容
    function getPage() {
        return {
            title:$("#title").val(),
            content:$("#content").val(),
            item: $("#item_id").val()
        }
    }




})
