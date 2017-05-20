// Below code about Call the inner function within outer function & displaying "Hello World" From Inner Function.
// Outer Function outerFn().  
function outerFn(arg1) {
    // inner Function innerFn(). 
	function innerFn() {
		console.log("Hello " + arg1);
	}
	return innerFn();
}
//Calling parameter 
 outerFn("World");
