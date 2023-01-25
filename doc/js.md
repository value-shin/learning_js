
# Table of Contents

1.  [JS](#org8de4173)
    1.  [始める前に](#org4820633)
        1.  [カオスのJS](#org6a86518)
        2.  [なんでこうなったか？](#org74c3ddd)
        3.  [結果は？](#org0fe620e)
    2.  [JSを学ばなければならない理由](#org6b946c5)
    3.  [この発表会の目的](#orgdb29b01)
    4.  [Tips](#org9c35ae0)
2.  [Variable](#org61abec9)
    1.  [既存の問題点](#org8ce1fc7)
        1.  [定数](#org4ea0f2d)
        2.  [Scope](#orgfd61f74)
        3.  [Hoisting](#org02c20ba)
    2.  [例](#org2b7763c)
        1.  [let](#orgf8d49d1)
        2.  [const](#org8d50207)
    3.  [説明](#org0499829)
        1.  [TDZ(Temperal Dead Zone)](#org7b27012)
        2.  [let](#orge2ff6a5)
        3.  [const](#org1b77204)
    4.  [Tips](#org7180b13)
        1.  [Object.freeze()](#org70c0f60)
        2.  [varがかわいそうです、varもたまには使用したいです。いいですよね？](#org3aa1db6)
        3.  [letとconstどっちを使うべき？](#org669f185)
3.  [Arrow function](#org6de50e9)
    1.  [Arrow function以前の関数宣言方法](#org8d65e0d)
        1.  [方法 1 - 関数宣言](#org463c08b)
        2.  [方法 2 - 関数式](#org7a103bc)
    2.  [既存の問題点](#orgaa2532a)
        1.  [hoisting](#orgc069f58)
        2.  [constructor](#orge04bd45)
        3.  [this](#orgcbbb527)
    3.  [例](#org5334c70)
        1.  [例 1 - arrow function作成](#orgf763473)
        2.  [例 2 - 返還の値だけ存在する場合、波括弧({})と"return"キーボード削除可能](#orga7da80b)
        3.  [例 3 - Parameterが1つだけ存在する場合、括弧省略可能。](#org2b2dcb4)
        4.  [例 4 - Closuresと一緒に使用](#org097563a)
        5.  [例 5 - 返還の値がobjectの場合](#org957be38)
        6.  [例 6 - this](#org5185cac)
        7.  [例 7 - Constructorで使用](#orgc8cfb2c)
    4.  [説明](#org676c5a1)
    5.  [Tips](#orgbdbeb8c)
        1.  ["=>"キーワードと既存の"function"キーワード、どっちを利用したらいい？](#org6e359a4)
4.  [Template literal](#orgd60ca0c)
    1.  [既存の文字列作成方法](#org18a9a41)
    2.  [既存の問題点](#org4798009)
        1.  [例](#org60455f5)
        2.  [説明](#orgb0e1c71)
    3.  [例](#orgea3f0d8)
        1.  [例 1 - 改行](#org0ecc768)
        2.  [例 2 - 文字列に変数を入れる 1](#org1bc6e8a)
        3.  [例 3 - 文字列に変数を入れる 2](#org0c82823)
        4.  [例 4 - 文字列内部に'(quote), "(double quote)に入れる](#org3477493)
        5.  [例 5 - \`(バックティック)の中で$表示。](#orgf355a4a)
        6.  [例 6 - \`(バックティック)の中で${}表示。](#org19d9c93)
    4.  [説明](#org004aa48)
    5.  [Tips](#org6089697)
        1.  [改行の際、indentの問題](#orgb9ba435)
        2.  [ObjectをString interpolationを利用して文字列を表現する場合の問題](#org5ef2fbf)



<a id="org8de4173"></a>

# JS


<a id="org4820633"></a>

## 始める前に


<a id="org6a86518"></a>

### カオスのJS

1.  'b' + 'a' + + 'a' + 'a'

    intro/baaa.js
    
        console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // > ??

2.  typeof

    intro/typeof.js
    
        console.log("typeof ''");
        console.log(typeof ''); // > ??
        console.log();
        
        console.log("typeof 's'");
        console.log(typeof 's'); // > ??
        console.log();
        
        console.log("typeof 30");
        console.log(typeof 30); // > ??
        console.log();
        
        console.log("typeof true");
        console.log(typeof true); // > ??
        console.log();
        
        console.log("typeof undefined");
        console.log(typeof undefined); // > ??
        console.log();
        
        console.log("typeof {a:1}");
        console.log(typeof {a:1}); // > ??
        console.log();
        
        console.log("typeof function(){}");
        console.log(typeof function(){}); // > ??
        console.log();
        
        console.log("typeof [1, 2, 4]");
        console.log(typeof [1, 2, 4]); // > ??
        console.log();
        
        console.log("typeof null");
        console.log(typeof null); // > ??
        console.log();
        
        console.log("typeof NaN");
        console.log(typeof NaN); // > ??
        console.log();

3.  Math.Max() > Math.Min()

    intro/max<sub>min.js</sub>
    
        console.log(Math.min() > Math.max()); // > ??
        console.log(Math.min() < Math.max()); // > ??


<a id="org74c3ddd"></a>

### なんでこうなったか？

-   なるべくエラーを出さないのを前提にしてデザインした言語
-   開発期間が短かった。


<a id="org0fe620e"></a>

### 結果は？

-   JSは単なるおもちゃ言語だと思う。
-   JSはcopy & pasteでも十分だと思う。


<a id="org6b946c5"></a>

## JSを学ばなければならない理由

-   frontで動く唯一の言語(他の選択肢がない。）
-   script言語の中ですごく速い。
-   ES6からは言語自体の機能が強化。


<a id="orgdb29b01"></a>

## この発表会の目的

-   JSのいい所を学び生産性を上げたい。
-   情報共有を会社の文化にさせたい。
-   vim信者を育てたい。


<a id="org9c35ae0"></a>

## Tips

-   分からない所があったら質問してください。
-   発表会が終わった後でも質問してもいいです！


<a id="org61abec9"></a>

# Variable


<a id="org8ce1fc7"></a>

## 既存の問題点


<a id="org4ea0f2d"></a>

### 定数

1.  ES6の以前定数を宣言する為には？

    -   JSの開発者達が集まって、大文字で作成した値は絶対変更しないと約束する。

2.  例

    1.  例 1 - Ideal
    
        variable/old/var<sub>constant</sub><sub>ideal.js</sub>
        
            var PLEASE_DO_NOT_CHANGE = 0;
            console.log(PLEASE_DO_NOT_CHANGE); // 0
            
            // 100万行の長いコードの後
            
            console.log(PLEASE_DO_NOT_CHANGE); // 0
    
    2.  例 2 - Bad
    
        variable/old/var<sub>constant</sub><sub>bad.js</sub>
        
            var PLEASE_DO_NOT_CHANGE = 0;
            console.log(PLEASE_DO_NOT_CHANGE); // 0
            
            // 100万行の長いコードの中
            // 前日、飲んだお酒が脳内で残っており、ぼんやりした状態で作成したコード
            PLEASE_DO_NOT_CHANGE = 1;
            // また、100万行の長いコードの後
            
            console.log(PLEASE_DO_NOT_CHANGE); // 1

3.  何が問題だったんだろう？

    -   前日、飲んだお酒
    -   一つのfileに100万行もある、今のプロジェクトコード
    -   他の人を信用しすぎた開発者


<a id="orgfd61f74"></a>

### Scope

1.  Scopeとは?

    1.  説明
    
        -   JSに限定した概念ではない。
        -   Scopeは全ての識別子（変数名、関数名、クラス名等） が宣言した位置によって接近できる、有効範囲。
        -   既存のJSのvarは特殊なscopeをもっている。
    
    2.  種類
    
        1.  block scope
        
            -   block({})によって生成される有効範囲
        
        2.  関数 scope
        
            -   関数によって生成される有効範囲
    
    3.  関連知識
    
        1.  文, 式, 値
        
            1.  文(statement)
            
                1.  特徴
                
                    -   結果をreturnしない。
                    -   文はblockを生成する。
                
                2.  例
                
                    -   if文
                    -   for文
                    -   while文
                    -   switch-case文
            
            2.  式(expression)
            
                1.  特徴
                
                    -   結果をreturnする。
                    -   値になれる。
                
                2.  例
                
                    -   1 + 2
                    -   hello()
                    -   'abc' + 'def'
            
            3.  値(value)
            
                1.  特徴
                
                    -   式が評価された結果 (1 + 2 => 3)
                    -   値そのもの (10)
                
                2.  例
                
                    -   3
                    -   'hello'

2.  例

    1.  例 1 - 関数 scope 1
    
        variable/old/var<sub>function</sub><sub>scope.js</sub>
        
            var x = 'global x';
            
            function foo() {
              var x = 'inside function x';
              console.log(x);
            }
            
            console.log(x); //> ??
            
            foo(); //> ??
            
            console.log(x); //> ??
    
    2.  例 2 - 関数 scope 2 - globalから接近
    
        variable/old/var<sub>function</sub><sub>scope</sub><sub>global</sub><sub>access.js</sub>
        
            var x = 'global x';
            
            function foo() {
              x = 'inside function x';
              console.log(x);
            }
            
            console.log(x); //> ??
            
            foo(); //> ??
            
            console.log(x); //> ??
    
    3.  例 3 - block scope 1 - if
    
        variable/old/var<sub>scope</sub><sub>if.js</sub>
        
            var x = 'global x';
            
            if (true) {
              var x = 'inside if x';
              console.log(x); //> ??
            }
            
            console.log(x); //> ??
    
    4.  例 4 - block scope 2 - for
    
        variable/old/var<sub>scope</sub><sub>for.js</sub>
        
            for (var i = 0; i < 10; i++) {
              console.log(i); //> ??
            }
            
            console.log();
            console.log(i); //> ??
    
    5.  例 5 - block scope 3 - for
    
        variable/old/var<sub>scope</sub><sub>for</sub><sub>global.js</sub>
        
            var i = 30;
            console.log(i); //> ??
            
            for (var i = 0; i < 10; i++) {
              console.log(i); //> ??
            }
            
            console.log(i); //> ??
    
    6.  例 6 - block scope 4 - for setTimeout
    
        variable/old/var<sub>scope</sub><sub>for</sub><sub>settimeout.js</sub>
        
            for (var i = 0; i < 10; i++) {
              setTimeout(() => {
                console.log(i); //> ??
              }, (i + 1) * 1000);
            }
    
    7.  例 7 - block scope 5 - 例 6 修正
    
        variable/old/var<sub>scope</sub><sub>for</sub><sub>settimeout</sub><sub>fix.js</sub>
        
            for (var i = 0; i < 10; i++) {
              (function (i) {
                setTimeout(() => {
                  console.log(i); //> ??
                }, (i + 1) * 1000);
              })(i);
            }


<a id="org02c20ba"></a>

### Hoisting

1.  hoistingは?

    1.  説明
    
        -   hoist => 持ち上げる, つり上げる
        -   変数と関数を実行する前にメモリに割り当てるという意味。
        -   変数の宣言と初期化を分離し、宣言だけをコードの先頭に移動されるもの。
        -   説明だけでは難しい概念なので、例を見ながら理解するのがいい。
        -   <https://developer.mozilla.org/ja/docs/Glossary/Hoisting>
        -   <https://developer.mozilla.org/en-US/docs/Glossary/Hoisting>

2.  例

    1.  例 1
    
        variable/old/hoisting<sub>variable.js</sub>
        
            console.log(name); //> ??
            
            var name = 'Shin';
            
            console.log(name); //> ??
    
    2.  例 2
    
        variable/old/hoisting<sub>function.js</sub>
        
            console.log(square(4)); //> ??
            
            function square(x) {
                return x * x;
            }
    
    3.  例 3
    
        variable/old/hoisting<sub>variable</sub><sub>and</sub><sub>function.js</sub>
        
            console.log(square); //> ??
            
            console.log(square(4)); //> ??
            
            var square = 0;
            function square(x) {
              return x * x;
            }
            
            console.log(square); //> ??
            
            console.log(square(4)); //> ??
    
    4.  例 4 - 例 3 修正
    
        variable/old/hoisting<sub>variable</sub><sub>and</sub><sub>function</sub><sub>fix.js</sub>
        
            console.log(square); //> ??
            
            console.log(square(4)); //> ??
            
            var square = 0;
            var square = function(x) {
                return x * x;
            }
            
            console.log(square); //> ??
            
            console.log(square(4)); //> ??


<a id="org2b7763c"></a>

## 例


<a id="orgf8d49d1"></a>

### let

1.  例 1 - 変数宣言

    variable/new/let.js
    
        let a = 1;
        console.log(a); //> ??
        
        a = 2;
        console.log(a); //> ??

2.  例 2 - "let"キーワードを再宣言する場合

    variable/new/let<sub>again.js</sub>
    
        let a = 1;
        console.log(a); //> ??
        
        let a = 2;
        console.log(a); //> ??

3.  例 3 - 関数 scope 1

    variable/new/function<sub>scope.js</sub>
    
        let x = 'global x';
        
        function foo() {
          let x = 'inside function x';
          console.log(x);
        }
        
        console.log(x); //> ??
        
        foo(); //> ??
        
        console.log(x); //> ??

4.  例 4 - 関数 scope 2 - globalに接近

    variable/new/function<sub>scope</sub><sub>global.js</sub>
    
        let x = 'global x';
        
        function foo() {
          x = 'inside function x';
          console.log(x);
        }
        
        console.log(x); //> ??
        
        foo(); //> ??
        
        console.log(x); //> ??

5.  例 5 - block scope 1 - if

    variable/new/if<sub>global.js</sub>
    
        let x = 'global x';
        
        if (true) {
          let x = 'inside if x';
          console.log(x); //> ??
        }
        
        console.log(x); //> ??

6.  例 6 - block scope 2 - if

    variable/new/if<sub>inside.js</sub>
    
        if (true) {
          let x = 'inside if x';
          console.log(x); //> ??
        }
        
        console.log(x); //> ??

7.  例 7 - block scope 2 - for

    variable/new/for.js
    
        for (let i = 0; i < 10; i++) {
          console.log(i); //> ??
        }
        
        console.log();
        console.log(i); //> ??

8.  例 8 - block scope 4 - setTimeout

    variable/new/set<sub>timeout.js</sub>
    
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            console.log(i); //> ??
          }, (i + 1) * 1000);
        }

9.  例 9 - 宣言前に変数を使用

    variable/new/before<sub>create.js</sub>
    
        console.log(name); //> ??
        
        let name = 'Shin';

10. 例 10 - 最初の宣言の際、値を入れない場合

    variable/new/create<sub>without</sub><sub>assign.js</sub>
    
        let a;
        console.log(a); //> ??
        
        a = 10;
        console.log(a); //> ??

11. 例 11 - letを後で使用する場合

    variable/new/after<sub>let.js</sub>
    
        a = 10;
        let a;
        
        console.log(a); //> ??


<a id="org8d50207"></a>

### const

1.  例 1 - 再宣言

    variable/new/const<sub>again.js</sub>
    
        const a = 1;
        console.log(a); //> ??
        
        a = 2;
        console.log(a); //> ??

2.  例 2 - 最初の宣言の際、値を入れない場合

    variable/new/const<sub>without</sub><sub>assign.js</sub>
    
        const a;
        console.log(a); //> ??
        
        a = 1;
        console.log(a); //> ??

3.  例 3 - reference typeの場合 - 既に存在するpropertyの値変更

    variable/new/const<sub>with</sub><sub>reference</sub><sub>change</sub><sub>property.js</sub>
    
        const abc = {
          a: 1,
          b: 2,
        };
        
        abc.a = 5;
        
        console.dir(abc); //> ??

4.  例 4 - reference typeの場合 - 新しいproperty追加

    variable/new/const<sub>with</sub><sub>reference</sub><sub>add</sub><sub>property.js</sub>
    
        const abc = {
          a: 1,
          b: 2,
        };
        
        abc.c = 10;
        
        console.log(abc); //> ??

5.  例 5 - reference typeの場合 - 新しいobjectをassign

    variable/new/const<sub>with</sub><sub>reference</sub><sub>assign</sub><sub>new</sub><sub>reference.js</sub>
    
        const abc = {
          a: 1,
          b: 2,
        };
        
        abc = {
          a: 5,
          b: 10,
        }
        
        console.log(abc); //> ??


<a id="org0499829"></a>

## 説明


<a id="org7b27012"></a>

### TDZ(Temperal Dead Zone)

-   JSのreperenceで「特定の場所ではrefences errorが発生しないといけない」を表現する為の名称


<a id="orge2ff6a5"></a>

### let

-   定数ではない。
-   既存の関数scopeが適用される。
-   その上、block scopeも適用される。
-   TDZ(Temperal Dead Zone)が適用される。


<a id="org1b77204"></a>

### const

-   定数。
-   既存の関数scopeが適用される。(letと同じ)
-   その上、block scopeも適用される。(letと同じ)
-   TDZ(Temperal Dead Zone)が適用される。(letと同じ)


<a id="org7180b13"></a>

## Tips


<a id="org70c0f60"></a>

### Object.freeze()

1.  説明

    -   reference typeの変更を防ぎたい場合、Object.freeze()を使用。
    -   <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze>

2.  例

    1.  例 1 - 使用方法
    
        variable/tips/freeze<sub>basic</sub><sub>usage.js</sub>
        
            const obj = {
              prop: 10
            };
            
            Object.freeze(obj);
            
            obj.prop = 999;
            
            console.log(obj); //> ??
    
    2.  例 2 - strict mode
    
        variable/tips/freeze<sub>strict</sub><sub>mode.js</sub>
        
            'use strict';
            
            const obj = {
              prop: 10
            };
            
            Object.freeze(obj);
            
            obj.prop = 999;
            
            console.log(obj); //> ??
    
    3.  例 3 - objectの中にobjectがある場合
    
        variable/tips/freeze<sub>object</sub><sub>inside</sub><sub>object.js</sub>
        
            'use strict';
            
            const obj = {
              objProp: {
                prop: 10
              }
            };
            
            Object.freeze(obj);
            
            obj.objProp.prop = 999;
            
            console.log(obj); //> ??
    
    4.  例 4 - objectの中にobjectがある場合、対処法
    
        variable/tips/freeze<sub>object</sub><sub>inside</sub><sub>object</sub><sub>rescue.js</sub>
        
            'use strict';
            
            const obj = {
              objProp: {
                prop: 10
              }
            };
            
            Object.freeze(obj);
            Object.freeze(obj.objProp);
            
            obj.objProp.prop = 999;
            
            console.log(obj); //> ??


<a id="org3aa1db6"></a>

### varがかわいそうです、varもたまには使用したいです。いいですよね？

1.  説明

    -   現在(2023年)基準では使用しないでください。

2.  理由

    -   varの場合定数変数かどうかの区別が難しい。
    -   varの場合基本的に定数ではないのでコードの可読性が下がる。
    -   varは他のプログラミング言語と違う動きをもっている。


<a id="org669f185"></a>

### letとconstどっちを使うべき？

1.  説明

    -   できる限りconstを使用すること。

2.  理由

    -   constを使用すると変数の値が変更されないと確信して、コードを読める。
    -   意図しなかった変更を予防できる。


<a id="org6de50e9"></a>

# Arrow function


<a id="org8d65e0d"></a>

## Arrow function以前の関数宣言方法


<a id="org463c08b"></a>

### 方法 1 - 関数宣言

arrow/old/function<sub>declare.js</sub>

    function sayMyName() {
      console.log('shin');
    }
    
    sayMyName(); // > ??


<a id="org7a103bc"></a>

### 方法 2 - 関数式

arrow/old/function<sub>expression.js</sub>

    const sayMyName = function () {
      console.log('shin');
    }
    
    sayMyName(); // > ??


<a id="orgaa2532a"></a>

## 既存の問題点


<a id="orgc069f58"></a>

### hoisting

1.  例

    1.  例 1 - 関数宣言使用
    
        arrow/old/function<sub>declare</sub><sub>hoisting.js</sub>
        
            sayMyName(); // > ??
            
            function sayMyName() {
              console.log('shin');
            }
            
            sayMyName(); // > ??
    
    2.  例 2 - 関数式使用
    
        arrow/old/function<sub>expression</sub><sub>hoisting.js</sub>
        
            sayMyName(); // > ??
            
            const sayMyName = function () {
              console.log('shin');
            }
            
            sayMyName(); // > ??

2.  説明

    -   関数宣言で使用する時と関数式で使用する時のhoistingが違う


<a id="orge04bd45"></a>

### constructor

1.  例

    1.  例 1 - constructor使用法
    
        arrow/old/constructor<sub>function.js</sub>
        
            var People = function (name) {
              this.name = name;
            
              this.sayMyName = function() {
                console.log(this.name);
              }
            };
            
            var person = new People('shin');
            person.sayMyName();
    
    2.  例 2 - 関数はconstructorになれる。
    
        arrow/old/all<sub>function</sub><sub>is</sub><sub>constructor</sub><sub>function.js</sub>
        
            var add = function (a, b) {
              return a + b;
            };
            
            var isntItBug = new add();
            
            console.dir(isntItBug);
            console.dir(add);

2.  説明

    -   関数を生成すると自動的にその関数にconstructorが繋がる。
    -   constructorで使用したくない関数でもconstructor機能をもってる為、
        無駄なresourceを使用してしまう。


<a id="orgcbbb527"></a>

### this

1.  例

    1.  例 1 - this binding
    
        arrow/old/this.js
        
            function Person() {
              this.age = 0;
            
              setInterval(function growUp() {
                this.age++;
                console.log(this.age);
              }, 1000);
            }
            
            var p = new Person();
    
    2.  例 2 - thisを変数に入れて使用
    
        arrow/old/this<sub>fix.js</sub>
        
            function Person() {
              var that = this;
              that.age = 0;
            
              setInterval(function growUp() {
                that.age++;
                console.log(that.age);
              }, 1000);
            }
            
            var p = new Person();

2.  説明

    -   methodの場合thisがglobalになっている。
    -   不用なthis bindingにより、無駄なresource使用してしまう。


<a id="org5334c70"></a>

## 例


<a id="orgf763473"></a>

### 例 1 - arrow function作成

arrow/new/arrow.js

    // var sayMyName = function () {
    //   console.log('shin');
    // }
    
    const sayMyName = () => {
      console.log('shin');
    }
    
    sayMyName(); //> ??


<a id="orga7da80b"></a>

### 例 2 - 返還の値だけ存在する場合、波括弧({})と"return"キーボード削除可能

arrow/new/arrow<sub>remove</sub><sub>paren.js</sub>

    // var getName = function () {
    //   return 'shin';
    // }
    const getName = () => 'shin';
    
    console.log(getName()); //> ??
    console.log();
    
    // var add = function(a, b) {
    //   return a + b;
    // }
    const add = (a, b) => a + b;
    
    console.log(add(1, 2));


<a id="org2b2dcb4"></a>

### 例 3 - Parameterが1つだけ存在する場合、括弧省略可能。

arrow/new/arrow<sub>only</sub><sub>one</sub><sub>parameter.js</sub>

    // const square = function(n) {
    //   return n * n
    // }
    
    // const square = (n) => {
    //   return n * n
    // }
    
    // const square = (n) => n * n;
    
    const square = n => n * n;
    
    console.log(square(10)); //> ??


<a id="org097563a"></a>

### 例 4 - Closuresと一緒に使用

arrow/new/arrow<sub>with</sub><sub>closures.js</sub>

    // const add = function(num1) {
    //   return function(num2) {
    //     return num1 + num2;
    //   }
    // }
    
    const add = (num1) => (num2) => num1 + num2;
    
    const add2 = add(2);
    
    console.log(add2(10)); //> ??


<a id="org957be38"></a>

### 例 5 - 返還の値がobjectの場合

arrow/new/arrow<sub>return</sub><sub>object.js</sub>

    // const f = function() {
    //   return {
    //     x: 10,
    //     y: 20
    //   }
    // }
    
    // const f = () => {
    //   return {
    //     x: 10,
    //     y: 20
    //   }
    // }
    
    // // Do not!
    // const f = () => {
    //   x: 10,
    //   y: 20
    // }
    
    const f = () => ({
      x: 10,
      y: 20
    });
    
    console.log(f());


<a id="org5185cac"></a>

### 例 6 - this

arrow/new/arrow<sub>this.js</sub>

    // function Person() {
    //   const that = this;
    //   that.age = 0;
    
    //   setInterval(() => {
    //     that.age++;
    //     console.log(that.age);
    //   }, 1000);
    // }
    
    function Person() {
      this.age = 0;
    
      setInterval(() => {
        this.age++;
        console.log(this.age);
      }, 1000);
    }
    
    
    const p = new Person();


<a id="orgc8cfb2c"></a>

### 例 7 - Constructorで使用

arrow/new/arrow<sub>constructor.js</sub>

    const add = (a, b) => a + b;
    
    const isntItBug = new add();
    
    console.dir(isntItBug);
    console.dir(add);


<a id="org676c5a1"></a>

## 説明

-   既存functionの宣言を短縮。
-   thisをbindingしない。
-   constructorで使用できない。


<a id="orgbdbeb8c"></a>

## Tips


<a id="org6e359a4"></a>

### "=>"キーワードと既存の"function"キーワード、どっちを利用したらいい？

1.  説明

    -   ES6を使用できる環境だったら"function"キーワードを使用しないこと!
    -   "function"キーワードを利用しない方法
        -   普通の関数 => arrow function
        -   objectのmethod => concised method
        -   constructor関数 => class

2.  理由

    -   "function"キーワードを利用した場合、ブラウザーごとに異なることがあるのでbugになる可能性が存在。
    -   "function"キーワードで動作する関数は、理解しにくい所がある。
    -   arrow functionは不用なproperty(argument, constructor等)がない為、性能的にもいい。


<a id="orgd60ca0c"></a>

# Template literal


<a id="org18a9a41"></a>

## 既存の文字列作成方法

template<sub>literal</sub>/old/declare<sub>string.js</sub>

    const str1 = 'string1';
    const str2 = "string2";


<a id="org4798009"></a>

## 既存の問題点


<a id="org60455f5"></a>

### 例

1.  例 1 - 改行

    template<sub>literal</sub>/old/new<sub>line.js</sub>
    
        const newLineEx1 = 'abc\ndef';
        
        const newLineEx2 = 'abc\n' +
                           'def';
        
        console.log(newLineEx1);
        console.log();
        
        console.log(newLineEx2);

2.  例 2 - 文字列に変数を入れる 1

    template<sub>literal</sub>/old/insert<sub>variable1.js</sub>
    
        const name = 'シン';
        const hello = 'おはよう';
        const age = 99;
        
        console.log(name + '、 ' + hello + '! ' + age + '歳の誕生日おめでとう!');

3.  例 3 - 文字列に変数を入れる 2

    template<sub>literal</sub>/old/insert<sub>variable2.js</sub>
    
        const one = 1;
        const two = 2;
        
        console.log(one + ' + ' + two + ' = ' + (one + two));

4.  例 4 - 文字列の中に '(quote), "(double quote)入れる

    template<sub>literal</sub>/old/quote.js
    
        const str1 = '"""""""""';
        const str2 = "'''''''''";
        const str3 = "\"hello\"";
        
        console.log(str1); //> ??
        console.log(str2); //> ??
        console.log(str3); //> ??


<a id="orgb0e1c71"></a>

### 説明

-   文字列内部に改行がある場合可読性が悪い。
-   文字列内部に変数を入れにくい。
-   文字列内部に'(quote), "(double quote)を入れるのが不便。


<a id="orgea3f0d8"></a>

## 例


<a id="org0ecc768"></a>

### 例 1 - 改行

template<sub>literal</sub>/new/new<sub>line.js</sub>

    const newLineEx = `abc
    def`;
    
    console.log(newLineEx);


<a id="org1bc6e8a"></a>

### 例 2 - 文字列に変数を入れる 1

template<sub>literal</sub>/new/insert<sub>variable1.js</sub>

    const name = 'シン';
    const hello = 'おはよう';
    const age = 100;
    
    console.log(`${name}、 ${hello}! ${age}歳の誕生日おめでとう!`);


<a id="org0c82823"></a>

### 例 3 - 文字列に変数を入れる 2

template<sub>literal</sub>/new/insert<sub>variable2.js</sub>

    const one = 1;
    const two = 2;
    
    console.log(`${one} + ${two} = ${one + two}`);


<a id="org3477493"></a>

### 例 4 - 文字列内部に'(quote), "(double quote)に入れる

template<sub>literal</sub>/new/quote.js

    const free = `'''''""""'''''""""""'''''`;
    
    console.log(free);


<a id="orgf355a4a"></a>

### 例 5 - \`(バックティック)の中で$表示。

template<sub>literal</sub>/new/dollar.js

    const one = 1;
    
    console.log(`$`);
    console.log(`$ ${one}`);


<a id="org19d9c93"></a>

### 例 6 - \`(バックティック)の中で${}表示。

template<sub>literal</sub>/new/string<sub>interpolation.js</sub>

    const one = 1;
    
    console.log(`$\{one\}は ${one}が出力されます。`);


<a id="org004aa48"></a>

## 説明

-   文字列の新しい宣言方法。
-   \`(バックティック)を利用して表現。
-   改行を楽にできる。
-   String interpolation(${変数名})を利用して文字列の間に簡単に変数を入れられる。


<a id="org6089697"></a>

## Tips


<a id="orgb9ba435"></a>

### 改行の際、indentの問題

template<sub>literal</sub>/tips/new<sub>line.js</sub>

    const newLineEx = `abc
      def`;
    
    console.log(newLineEx);

String.prototype.trim()を利用したら改行と関係なく綺麗に書ける。

template<sub>literal</sub>/tips/new<sub>line</sub><sub>with</sub><sub>trim.js</sub>

      const newLineEx = `
    abc
    def
    `.trim();
    
      console.log(newLineEx);


<a id="org5ef2fbf"></a>

### ObjectをString interpolationを利用して文字列を表現する場合の問題

template<sub>literal</sub>/tips/new<sub>line.js</sub>

    const obj = {
      a: 1,
      b: 2
    }
    
    console.dir(`${obj}`); //> ??

String interpolationは内部的にtoStringの処理を利用する為、起こる現象。

ObjectをString interpolationで表現する場合はJSON.stringfy()を利用したらいい。

template<sub>literal</sub>/tips/object<sub>stringify.js</sub>

    const obj = {
      a: 1,
      b: 2
    }
    
    console.dir(`${JSON.stringfy(obj)}`);

