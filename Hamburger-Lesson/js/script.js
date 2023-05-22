$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    // toggleClass() = アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除される。
    // $(this) = クリックされた要素自身を表します。
    
    $('#sp-menu').fadeToggle();
    //#sp-menuが開いたときに、.fadeToggle()が処理されるように設定
    // sp-menuはhtmlで定義
    
    event.preventDefault();
  });
});