//test Object json 
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}

// 对象的属性可以通过链式表示方法进行访问
obj.details.color;
obj["details"]["size"];


//  创建一个对象原型Person

function Person(name,age){
    this.name = name;
    this.age = age;
}

// 定义一个对象
var myObject = new Person("御宅大猫",27);
//创建了一个新的Person，名称是 myObject
//（“御宅大猫” 是第一个参数，27 是第二个参数）


// 完成创建后，对象属性可以同归下列方式赋值和访问

obj.name = "御宅大猫";
var name = obj.name;

//
obj['name'] = 'yuzhaidamao';

var name = obj['name'];


// javascript中的数组（也是对象）

var a = new Array();
a.length;//打印数字长度；
a[0] = 'yang';
a[1] = 'juan';
a[2] = 'is a';
a[3] = 'cat';

//或者直接定义 
var arr = ['yang','juan','is','a','cat'];
a.lentgh;
a[100] = "fox";


// 求一组数组的平均数

function avgArray(arr)
{
var sum = 0;
for(var i = 0;j=arr.length;i<j;i++)
{
    sum += arr[i];
}
return sum / arr.length;

}


(function(){
        // do something 
})();

function test(){
    //do things
}


var test = (XXX)(YYY);


function makePerson(first, last) {
    
        this.first = first,
        this.last = last,
        this.fullName = function() {
            return this.first + ' ' + this.last;
        },
        this.fullNameReversed = function() {
            return this.last + ', ' + this.first;
        }
    }
}


function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}

 function fullName() {
    return this.first + ' ' + this.last;
}
 function fullNameReversed() {
    return this.last + ', ' + this.first;
}



function fullName{
    var strDt = "2018-09-30";
    
    
}






