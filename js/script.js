'use strict';

$(".openbtn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const roop = new roop(".swiper", {
    speed: 10000,　//スライドの切り替え時間
    slidesPerView: 2,　//一度に表示するスライド枚数
    loop: true, //繰り返し
    centeredSlides: true, //アクティブなスライドをスライダーの中心に
    preventInteractionOnTransition: true, //クリックなどをしてもスライダーの停止を防ぐ
    autoplay: {
      delay: 0, //0にすることで流れ続けます。
    },
  });