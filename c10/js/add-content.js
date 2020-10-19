


function definingsamescope()
{
	//Your Code Goes Here
	var foo = 'hello ';
var sayHello = function () {
console . log ( foo );
};
sayHello (); // logs ’hello ’
console.log( foo ); // also logs ’hello ’
	
	
	
}
function outsidethescope()
{
	var sayHello = function () {
		var foo = 'hello';
		console.log( foo );
		};
		sayHello (); // logs ’hello ’
		console.log( foo ); // doesn ’t log anything
}
function differentscope()
{
	var foo = 'world' ;
var sayHello = function () {
var foo = 'hello' ;
console.log ( foo );
};
sayHello (); // logs ’hello ’
console.log ( foo ); // logs ’world ’

}