// $(function(){
//   $('.box1').css({
//   // CSSのスタイルをjQueryで変更するときは、「CSSメソッド」を使う
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });
// // 上から表示させる

// $(function(){
//   $('.box1').slideUp();
// });
// // 下から上へ画像が消える

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// ↓

// $(function(){
//   $('.box1').hide();
// });
// //jQuery要素で画像を消した。

// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
// });

// クリックすると四角が消える。(クリックしたものだけ)
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// //thisの学習 
// //↑を一つにまとめたもの
// // box1をhtmlで定義ずみ
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

//childrenの学習
// htmlの記述→ <button>クリック</button>
// クリックをすると、ul要素が赤くなる、s
$(function(){
$('button').on('click', function(){
$('ul').children().css('color','red');
});
});