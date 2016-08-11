/**
 * Created by oliwen on 16/7/1.
 */
var ItemList = function() {};

//初始化
ItemList.init = function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 1,
            shadowScale: 0
        }
    });
}

