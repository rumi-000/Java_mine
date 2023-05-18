// alert('Hello World');

// let で　hello を定義:alert文で呼び出し
// let hello = 'Hello World';
// alert(hello);


// 代入
// str = let str で文字列の代入ができる。
// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// int = let int で数字の代入ができる。
// let str1 = 'Hello';
// let str2 = 'World!!';
// let int1 = 1;
// alert(str1 + str2 + int1);


// 条件分岐
// let orange = 1000;
// let apple = 120;

// 条件1つの場合
// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }

// 条件2つの場合
// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// 条件3つの場合
// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }


// 繰り返し処理
// let max = 100;
// let num = 5;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// for構文
// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

// let i;
// 「変数i」を宣言

// let num = 0;
// 「変数num」を宣言し、初期値を「0」に設定

// for(i = 1; i < 11; i++){
//   変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
  
//   num = num + i;
//   変数numに「num+i」を代入
// }

// alert('1から10まで足し算した結果は' + num + 'です');
// アラートウィンドウに計算結果を表示

// varによる再宣言→エラー
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)


// // グローバルスコープ、どこでも参照できる
// var str = "webcamp" 

// // 関数スコープ。foo関数内で参照できる
// function foo() {
//   console.log(str)
//   var y = "hello" 
// }

// // console.log(str)→webcampと出てくる
// // console.log(y)→yが定義されていないというエラーが出てくる
// foo()
// console.log(str)


// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
//   // foo()→関数外でやるとエラー、今回の様に関数内だとエラーにならない。
// }


// for (let i = 0; i < 10; i++) {     
//   console.log(i) 
// }

// console.log(i)→関数外での参照をしたのでエラーになる。



// // Aはグローバルスコープである
// var str = "webcamp A"

// // 変数内で使用されている宣言の巻き上げが起こる。=関数冒頭で変数を宣言したことになる=Bが宣言となる。
// function foo() { 
//   console.log(str)
//   var str = "dmm webcamp B"
//   console.log(str)
// }

// foo()


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 入力する値を「引数（ひきすう）」、出力される値を「戻り値（もどりち）」

// 関数の作成
// function addString(strA){
// // functionの後に、関数名「addString」を記述し、引数として「strA」を定義しています。
//   let addStr = "Hello " + strA;
//   // 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合しています。
//   return addStr;
//   // 結合結果の格納された「addStr」を、関数の戻り値としています。returnを記述することで、出力結果が表示されます。
// }

// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp!");

// //変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello！！ " + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);



let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}