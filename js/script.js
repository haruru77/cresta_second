$(function() {
    $('.c-hamburger').on('click', function() {
        $('.c-hamburger, .p-hamburger').toggleClass('show');
        if ($(this).hasClass("show")) {
            $("html").addClass("is-fixed"); // 背景固定！
        } else {
            $("html").removeClass("is-fixed"); // 背景固定解除！
        }
    });
    $('.p-hamburger__menu>li>a').on('click', function() {
        $('.c-hamburger, .p-hamburger').removeClass('show');
        $("html").removeClass("is-fixed");
    });
});

$(function() {

    //スクロールしたらイベント発生
    $(window).on('scroll', function() {
        //スクロールの値がヘッダーの高さを超えたらnavにfixedクラスを追加して固定
        if ($(window).scrollTop() > $(window).height() - 1) {
            $('.p-header').addClass('fixed');
        } else {
            $('.p-header').removeClass('fixed');
        }
    });
    //ページを読み込んだらスクロールイベントを実行させる
    $(window).trigger('scroll');

});