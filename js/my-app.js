// Initialize your app
var myApp = new Framework7({
    material:true
});
// Export selectors engine
var $$ = Dom7;
// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

//page跳转
function jumpPage(a) {
    if(a == 'itemlist') {
        mainView.router.loadPage("src/html/itemlist.html");
    }else if(a == 'weixintest') {
        mainView.router.loadPage("src/html/weixintest.html");
    }
}

//页面初始化
$$(document).on('pageInit', function (e) {
    // Page Data contains all required information about loaded and initialized page
    var page = e.detail.page;
    //
    if(page.name = 'itemlist') {
        ItemList.init();
    }
})