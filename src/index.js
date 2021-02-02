import cipher from './cipher.js';

let dcodedTxt = document.querySelector("#dcodedTxt");
let ncodedTxt = document.querySelector("#ncodedTxt");
let offsetNum = document.querySelector("#offsetNum");
let encodeBtn = document.querySelector("#encodeBtn");
let decodeBtn = document.querySelector("#decodeBtn");

function listener(event) {
	if (event.target == encodeBtn) {
		var input = dcodedTxt;
		var offset = Number(offsetNum.value);
		var output = ncodedTxt;
		var func = cipher.encode;
	} else if (event.target == decodeBtn) {
		var input = ncodedTxt;
		var offset = -Number(offsetNum.value);
		var output = dcodedTxt;
		var func = cipher.decode;
	}

	output.value = func(offset, input.value);
}

[encodeBtn, decodeBtn].forEach(function(ele) {ele.addEventListener("click", listener);})
