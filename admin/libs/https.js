//沙盒模式，ajax请求接口

;(function(w){
    let basics = 'http://localhost:8080/api/v1';
    site = {
        basics : basics,//基地址
        userLogin : basics + '/admin/user/login',//用户登录接口
        userInfo : basics + '/admin/user/info',//获取用户信息
    }   
    //1
    window.site = site;

})(window);