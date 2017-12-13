split:将字符串分割为数组(返回的是数组)
split:如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割
"2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
"|a|b|c".split("|")	//将返回 ["", "a", "b", "c"]
'abcdef'.split('')  //将返回 ["a", "b", "c", "d", "e", "f"]


join:将数组转为字符串
var a = ['wind', 'rain', 'fire']
var myv1 = a.join() // "wind,rain,fire"
var myv2 = a.join('')  // "windrainfire"
var myVar3 = a.join(' + ') // myVar3 的值变为"Wind + Rain + Fire"


slice 既可以截取数组也可以截取数组
var arr = [1,2,3]
var aa = arr.slice(1,2,3)  // 给出多余的参数没用
console.log(aa) [2]
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
var citrus = fruits.slice(1,3) // ["Orange", "Lemon"]
var citrus = fruits.slice(-1)  // ["Mango"]
字符串同数组 只不过返回的是字符串



var temp = new Date()
function f() {
    console.log('temp', temp)
    if(false) {
        var temp = 'hello world'
    }
}


function f() {
    console.log('I an outside');
}
(function () {
    console.log('f1', f());
    if (false) {
        function f() {
            console.log('I am inside')
        }
    }
    f()
})()

let a
{
    a = 3
}


 class 会覆盖元素的 css
 后面定义的class 会覆盖前面的 class
 id 会覆盖 class
 内连 css 覆盖所有

 0 是 hex code（十六进制编码）中最小的一个，它代表颜色的完全缺失。

 F 是 hex code（十六进制编码）中最大的一个，它代表最大可能的亮度。

 body {
   background-color: rgb(0, 0, 255)
 }

// for in 循环中, item 是数组的下标
 var arr = new Array("first", "second", "third")
 for(var item in arr) {
 console.log( 'item',item)
 }
 // for in 循环中, item 是字典的key
var obj = {
    aaa: 'nihk',
    bbb: 'kkk',
    ccc: 333,
}
 for(var item in obj) {
 console.log( 'item', obj[item])
 }



 现在让我们回到我们的Cat Photo应用。这次，我们将用流行的响应式框架Bootstrap来美化它

 你仅需要通过添加下列代码到你的HTML开头来将Bootstrap添加到任意应用中：

<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css"/>



yarn 淘宝源
 yarn config set registry https://registry.npm.taobao.org


var es = function (sel) {
    return document.querySelectorAll(sel)
}


17. 两个元素垂直居中布局

答：父元素position:relative 子元素：position:absolute top:50% transform:translateY(-50%)


JavaScript 中的对话框有哪几种？

可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框


// src 无法内连 直接写变量的形式 src= `${aaa}` 这样不行的,html不支持.
oLi.innerHTML += '<div class="pro_img"><img src= "'+`${aaa}`+'" width="100" height="150"></div>';


relative 和 absolute : relative 依然占据空间 自己升仙了 可以飘动(依然占据自己的空间,不得元素不会挤掉它) 但不会改变页面布局
 可以设置 top bottom right left, 非static 元素多吧可以设置top bottom right left

 absolute: 不占自己的位置了, 绝对的飘起来.(可能会挡住别人) 它的 top bottom right left 基准是一个非 static 的元素

overflow熟悉 是内容超过容器的处理方式 visible 默认      auto  需要的时候加滚动条      hidden  隐藏多余元素   scroll  强制加滚动条(就算不需要也加).


border: 20px red solid; 相当于 border-width: 20px; border-style: solid; border-color: red;
border-top border-bottom border-left border-right


outline 属性 和border 属性相似,  但 outline(轮廓) 不会改变页面布局(相当于在元素外面套一层), border(边框) 会改变布局, 所以通常用 outline 标记出元素.

: 10px 20px 30px 40px; (顺时针)

border-radius: 5px 10px 20px 30px; (分别是左上角 右上角 右下角 左下角)
border-radius: 5px 10px; 左上角和右下角为5px, 右上角个左下角为10px;

background 属性
background-color: red;
background-image: url(bg.png);
background-repeat: no-repeat;
background-attachment: fixed;

缩写 background: red url no-repeat;


居中写法

block 元素居中
//  0 就是 0px的意思,  0的时候可以省略单位
//  auto 是左右
//这个要配合 width 属性, 因为上下是 0 的话,左右肯定需要有宽度, 这样才会居中.
margin: (外边框)  普通的 div 为什么没居中, 因为普通的 div 的宽度是默认占满的, 所以需要设置宽度.
margin: 0 auto;
width:100px;


inline 和 inline-block 元素居中

text-align: center; (margin: 0 auto; 只是这个元素居中了,想要里面的内容也居中 就要用到text-align 属性)





var Student = function () {
    this.name = 'lee'
    this.lll = function () {
        console.log(123)
    }
}
var aaa = new Student()


window.color = 'red'

function saycolor() {
    alert(this.color)
}

var o = {
    color: 'blue'
}

saycolor.call(o)


function Box(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        return this.name + this.age
    }
}
 var box = Box()
 var o = new Object()
 // Class1.call(this) 后面就是正常传参
 Box.call(o, 'lee', 100)

 function Class1() {
     console.log('this111', this)
     this.showTxt = function()
     {
         console.log(123);
     }
 }

 function Class2()
{
    console.log('this', this)
    Class1.call(this); // 相当于 Class1(), 然后在指定 Class1.call() 的 this
    console.log('that', this)
}


var c2 = new Class2();
c2.showTxt()

这样 Class2 就继承Class1了，Class1.call(this) 的 意思就是使用 Class1 对象代替this对象




var names = ['Alice', 'Emily', 'Kate'];

var cc = names.map(function (name) {
  return "<div>'Hello'+ name </div>"
})

JSX
我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中
代码中嵌套  多个 HTML 标签，需要使用一个标签元素包裹它 比如用一个<div></div>
如果只有一个 html 标签 就直接写标签名就行, 外面就不用再包一层.



组件 :组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取
这里的组件就是指组件实例化的那个.也就是 <HelloMessage name="John" />,
<h1>Hello {this.props.name}</h1> 是需要返回给页面的 html, 如何把实例的 name属性 插入到页面中.
可以用this.props.name 访问到组件(实例)的属性.

var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
//第一个参数只是模板 模板必须有 html 标签, 不能裸着插入文字
ReactDOM.render(
    模板,
    document.qetElementById('example')
)


var arr = new Array("first", "second", "third")
for(var item in arr) {
console.log( 'item', item)
}


 function Box() {
 }

 Box.prototype = {
    name : 'lee',
    age : 100,
    run: function () {
        return this.name + this.age
    }
 }
 var box = new Box()


 var log = function () {
     console.log.apply(console, arguments)
     console.log(arguments)
 }
 var log = function () {
      console.log.call(console, 1,2,3)
      console.log(arguments)
    }
  log(4,5,6) // 输出还是 1 2 3

 var Fun = function () {
     var that = this
     that.this = 111
     this.name = '123'
     console.log('this',this)
}
var id = 1

function foo() {
    setTimeout(() => {
        console.log('id:', this, this.id)
    }, 1000)
}

var b = {
    id: 'lee'
}
function foo() {
    console.log('this', this.id)
    setTimeout(function () {
        console.log('id:', this, this.id)
    }, 1000)
}
foo.call(b)

var a = {
    b: 1,
}
var c = function(a) {
    console.log('111', a.b++)
    a.b++
}
console.log('aaas',c(a), a)



var a = 2
var c = function(a) {
    console.log('aaa', a++)
 a++
}


var [a,b,c] = [1,2,3]

function foo() {
    var a = 2

    function bar() {
        console.log(a)
    }
    bar()
    console.log(a)
}
