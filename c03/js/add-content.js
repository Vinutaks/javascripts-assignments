


function conditionalcode()
{
	//Your Code Goes Here
	var foo = true ;
	var bar = false ;
	if ( bar ) {
	// this code will never run
	console.log('hello!');
	}
	if ( bar ) {
	// this code won ’t run
	} else {
	if ( foo ) {
	// this code will run
	} else {
	// this code would run if foo and bar were both false
	}
 }
console.log(foo);
	
	
	
}
function switch_statement()
{
	var foo=true;
	switch(foo) {
		case 'bar':
		alert ( 'the value was bar -- yay !');
		break ;
		case 'baz' :
		alert ( 'boo baz :( ');
		break ;
		default :
		alert ('everything else is just ok');
		break ;
		}
		console.log(foo);		
}