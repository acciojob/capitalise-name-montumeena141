//your JS code here. If required.

// let cap= document.getElementById("fname");
//  cap.addEventListener("blur", () {
//     // this.value = this.value.toUpperCase();
// 	 let val=cap.value;
// 	cap.value = val.toUpperCase();
//  });

let input = document.getElementById("fname");
	input.addEventListener("blur",()=>{
		let val = input.value;
		input.value = val.toUpperCase();
	})