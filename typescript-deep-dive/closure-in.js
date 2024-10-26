function outerFunction(arg) {
	var variableInOuterFunction = arg;

	function bar() {
		console.log(variableInOuterFunction);
	}

	bar();
}

outerFunction("hello closure");
