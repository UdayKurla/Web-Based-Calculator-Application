function dis(val) {
	document.getElementById("x1").value += val
	}
	
	function sol() {
	let x = document.getElementById("x1").value
	let y = eval(x)
	document.getElementById("x2").value = y
	}
	
	function clr() {
		document.getElementById("x1").value = ""
		document.getElementById("x2").value = ""
	}
	
	function back(){
		
		document.getElementById("x1").value = document.getElementById("x1").value.slice(0,-1);
	}