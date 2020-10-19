


function thiskeyword()
{
	//Your Code Goes Here
	var myObject = {
		sayHello : function () {
		console.log ( 'Hi! My name is ' + this . myName );
		} ,
		myName : 'Rebecca '
		};
		var secondObject = {
		myName : 'Colin '
		};
		myObject . sayHello (); // logs ’Hi! My name is Rebecca ’
		myObject . sayHello . call ( secondObject ); // logs ’Hi! My name is Colin ’
	}
	function keyword()
	{
	var myName = 'the global object ' ,
	sayHello = function () {
	console.log( 'Hi! My name is' + this . myName );
} ,
	myObject = {
	myName : 'Rebecca'
};
	var myObjectHello = sayHello . bind ( myObject );
	sayHello (); // logs ’Hi! My name is the global object ’
    myObjectHello (); // logs ’Hi! My name is Rebecca ’

	} 