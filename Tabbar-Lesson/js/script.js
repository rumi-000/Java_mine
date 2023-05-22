$('#tab-contents .tab[id != "tab1"]').hide();
// $('要素[属性 != "値"]') = 属性値が特定の値に等しい要素だけを取得したいとき = 初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたい

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  // removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド 
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});