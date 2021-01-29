import cipher from './cipher.js';

let dcodedTxt = document.querySelector("#dcodedTxt");
let ncodedTxt = document.querySelector("#ncodedTxt");
let offsetNum = document.querySelector("#offsetNum");
let encodeBtn = document.querySelector("#encodeBtn");
let decodeBtn = document.querySelector("#decodeBtn");

encodeBtn.addEventListener("click", function(){
	ncodedTxt.value = cipher.encode(Number(offsetNum.value), dcodedTxt.value)
});
decodeBtn.addEventListener("click", function(){
	dcodedTxt.value = cipher.decode(Number(offsetNum.value), ncodedTxt.value)
});
