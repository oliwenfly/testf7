/**
 * Created by oliwen on 16/7/28.
 */
var WeixinSdk = function() {};

/**
 * 初始化
 */
WeixinSdk.init = function() {
};

/**
 * 微信配置成功调用
 */
wx.ready(function() {
    //myApp.alert("微信配置成功!");
});

/**
 * 微信配置失败调用
 */
wx.error(function(res){
    //myApp.alert('微信配置失败!');
});

/**
 * 检测微信的接口
 */
WeixinSdk.check = function() {
    wx.checkJsApi({
        jsApiList: [
            'getNetworkType',
            'previewImage'
        ],
        success: function (res) {
            myApp.alert(JSON.stringify(res));
        },
        fail: function(err) {
            myApp.alert(JSON.stringify(err));
        },
        complete: function (res) {
            myApp.alert(JSON.stringify(res));
        }
    });
}