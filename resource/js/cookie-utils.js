
export default {
    set: function(key,value,date_second,path) {
        //根据timelength设置过期时间
        var d = new Date();
        d.setTime(d.getTime()+date_second*1000);
        //设置cookie
        document.cookie= key+"="+value+"; expires="+d.toGMTString()+"; path="+(path==undefined?path:null);
    },
    get: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) 
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    },
    del: function(name) {
        this.set(name,this.get(name),0)
    }
}