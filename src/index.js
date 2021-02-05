import cipher from './cipher.js';

const inputText = document.querySelector("#inputText");
const outputTxt = document.querySelector("#outputTxt");
const offsetNum = document.querySelector("#offsetNum");
const encodeBtn = document.querySelector("#encodeBtn");
const decodeBtn = document.querySelector("#decodeBtn");
const codeBttns = [encodeBtn, decodeBtn];
const copyCbBtn = document.querySelector("#copyCbBtn");

function copy() {navigator.clipboard.writeText(outputTxt.value);}
function listener(event) {
	var offset;
	if (event.target == encodeBtn) offset = + offsetNum.value;
	if (event.target == decodeBtn) offset = - offsetNum.value;
	outputTxt.value = cipher.code(offset, inputText.value);
}

copyCbBtn.addEventListener("click", copy);
codeBttns.forEach(ele => ele.addEventListener("click", listener));
