


function closuresaccess()
{
	var outerObj = {
		myName : 'outer ' ,
		outerFunction : function () {
		// provide a reference to outerObj
		// through innerFunction ’s closure
		var self = this ;
		var innerObj = {
		myName : 'inner ' ,
		innerFunction : function () {
		// logs ’outer inner ’
		console . log ( self . myName , this . myName );
		}
		};
		innerObj . innerFunction ();
		console . log ( this . myName ); // logs ’outer ’
		}
		};
		outerObj . outerFunction ();
		
	}