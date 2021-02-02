import cipher from './cipher.js';

let inputText = document.querySelector("#inputText");
let outputTxt = document.querySelector("#outputTxt");
let offsetNum = document.querySelector("#offsetNum");
let encodeBtn = document.querySelector("#encodeBtn");
let decodeBtn = document.querySelector("#decodeBtn");

function listener(event) {
	if (event.target == encodeBtn) {
		var offset = Number(offsetNum.value);
		var func = cipher.encode;
	} else if (event.target == decodeBtn) {
		var offset = -Number(offsetNum.value);
		var func = cipher.decode;
	}

	outputTxt.value = func(offset, inputText.value);
}

[encodeBtn, decodeBtn].forEach(function(ele) {ele.addEventListener("click", listener);})
