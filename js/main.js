//call, apply, bind
/*
var good = {
	name: 'laptop',
	price: 2000
}

function getPrice(currency){
	return this.price + currency
}
//someFunction.call(context, a,d,f,g,f)
var price = getPrice.call(good, '$');
console.log(price);

//someFunction.apply(context, [])
var arr = [1,2,2,3,4,4,12377777777123,3635122,4366462458364587345363124,35634523];
//getMax with specific array
function getMax(array){
	var maxVal = Number.NEGATIVE_INFINITY;
	for(var i = 0; i < array.length; i++){
		if(array[i] > maxVal){
			maxVal = array[i];
		}
	}
	return maxVal
}
var result = getMax(arr);
console.log(result);

//getMax with arguments
function getMax2(){
	var maxVal = Number.NEGATIVE_INFINITY;
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] > maxVal){
			maxVal = arguments[i];
		}
	}
	return maxVal
}
var result2 = getMax2(12,45,2,5,5,2,15,23423,534);
console.log(result2);


//Math.max
var maximum = Math.max(12,45,2,5,5,2,15,23423,534);
console.log(maximum);

var maximum2 = Math.max.apply(null, arr);
console.log(maximum2);*/

//call, apply in constructors
/*function Person(name, sname){
	this.name = name;
	this.sname = sname;
	this.sayHello = function(){
		alert('Hello my name is ' + getFullName.call(this) + "!")
	}
	function getFullName(){
		return this.name + ' ' + this.sname;
	}
}
var Alex = new Person('Alex', 'Alex')
Alex.sayHello();
*/
/*function Parent(name, sname){
	this.name = name;
	this.sname = sname;
	this.getFullName = function(){
		return this.name + this.sname
	}
	this.sayHello = function(){
		alert(this.name + ' ' + this.sname)
	}
}

function Child(name, sname, age){
	Parent.call(this, name, sname)// get parent properties
	// child properties
	this.age = age;

}

var Greg = new Child('Greg', 'House', 12);
Greg.sayHello();
console.log(Greg);*/

/*
var Parent = {
	constructor: function(name, sname){
		this.name = name;
		this.sname = sname;
	},
	prop1: 'prop2',
	getFullName: function(){
		return this.name + ' ' + this.sname
	}
}

var child = Object.create(Parent)
child.name = 'Alex';
child.sname = 'Blal'
console.log(child.getFullName());
console.log(child.name);*/




//setTimeout(callback, 3000) - function, 
/*
setTimeout(function(){
	alert('hello')
}, 2000)

function foo(){
	alert('Hello from foo')
}

setTimeout(foo, 1000)
*/
/*var i = 0;
var interval = setInterval(function(){
	if(i > 4){
		clearInterval(interval)
		return;
	}
	i++;
	console.log(i);
}, 1000);

*/
//event loop in javascript
/*console.log(1);
setTimeout(function(){
	console.log(2);
}, 0);
console.log(3);
*/

//Immediate call function
//

/*(function(a,b){
	var sum;
	sum = a+b;
	console.log(sum);
	return sum;
})(2,3)*/


//
/*for(var i = 0; i < 10; i++){
	(function(index){
		setTimeout(function(){
			console.log(index);
		}, 1000*index)
	})(i)	
}*/

/*
function f(param){
	return param
}
f(1)
(function(param){
	return param
})(1)

*/
/*//first way
(function(){})()
//second way
(function(){}())
*/


var obj ={
	name: 'name',
	sayHello: function(){
		alert(this.name)
	}
}
//
setTimeout(obj.sayHello.bind(obj), 2000)
// obj.sayHello.bind(obj)


// call, apply - call function with context
//bind - create wrapper, DOES NOT CALL!!!!!!!!!!!!!!!!!!!