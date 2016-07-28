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

//启动
function jumpPage(a) {
    if(a == 'itemlist') {
        mainView.router.loadPage("src/html/itemlist.html");
    }else if(a == 'weixintest') {
        mainView.router.loadPage("src/html/weixintest.html");
    }
}