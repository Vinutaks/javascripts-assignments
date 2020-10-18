


function BasicLoops()
{
	//Your Code Goes Here
	// logs ’try 0 ’ , ’try 1 ’ , ... , ’try 4 ’
    for ( var i =0; i <5; i ++) {
	console.log (' try'  + i);
	}

}
function  ForLoop()
{
	for ( var i = 0 , limit = 100; i < limit ; i ++) {
		// This block will be executed 100 times
		console.log ( 'Currently at '+ i);
		// Note : the last log will be ” Currently at 99”
		}
}
function WhileLoop()
{
	var i = 0;
    while (i < 100) {
// This block will be executed 100 times
   console.log('Currently at' + i);
   i ++; // increment i
}
}
function Do_While_Loop()
{
	do {
		// Even though the condition evaluates to false
		// this loop ’s body will still execute once .
		alert ('Hi there !');
		} while ( false );
		console.log(alert);
}
function Break_Continue()
{
	for ( var i = 0; i < 10; i ++) {
		if( i==3) {
	  break ;
   }
   
  }
  
  for ( var i = 0; i < 10; i ++) {
	if ( i==3 ) {
	continue ;
	}
	// The following statement will only be executed
	// if the conditional ’something ’ has not been met
	console.log('I have been reached');
}

}