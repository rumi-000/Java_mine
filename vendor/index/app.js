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



for (let i = 0; i < 10; i++) {
  console.log(i);
}