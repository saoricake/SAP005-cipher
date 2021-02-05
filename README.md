# caesar cipher spoilertagger

_caesar cipher spoilertagger_ is, well, exactly that: a small web app that encodes and decodes text messages using the [caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) substitution cipher.

***

## table of contents

* [1. what it is](#1-what-it-is)
* [2. why it is](#2-why-it-is)
* [3. how it works](#3-how-it-works)
* [4. how it was made](#4-how-it-was-made)
* [5. fun facts](#5-fun-facts)

***

## 1. what it is

this was a learning project based on the [laboratoria coding bootcamp](https://www.laboratoria.la/)'s [first assignment for the sap005 class](https://github.com/Laboratoria/SAP005-cipher); i am not in that class, but my sister is, and she assigned me this project as a learning exercise.

***

## 2. why it is

though no longer secure enough to be used in circumstances involving sensitive information, the caesar cipher continues to see use in lower-stake environments — such as internet communities and fandoms — as a way to easily conceal and reveal spoilers. and while there might already be other web applications out there that do this (ones that i myself have used before, even), i've found that they're often a little ugly, or overcomplicated, or lacking in certain functionalities that would be helpful to have.
so my goal while developing this was to keep those things in mind, and make something that i would use over the alternatives!

***

## 3. how it works

it's very easy!

1. insert the text you want to encode or decode into the upper text box!
	- the text can include any characters, but keep in mind that the cipher will only be applied to the uppercase and lowercase letters of the latin alphabet!
2. select the key (aka offset/shift/etc.) value in the central number input field!
	- for encoding, feel free to pick whichever value you like!
	- for decoding, you'll have to pick the same value that was used in the encoding!
	- this value can be any integer, even negative ones, but keep in mind that due to how the cipher works, there are only 26 unique key values; this means that a key of 1 will return the same output as a key of 27, 2 the same output as 28, and so on and so forth.
3. press the "encode" or "decode" button, depending on what it is that you want to do to the message...
4. and wow! the text is now unreadable! (or readable, if you were decoding it)
5. (optional) click the "copy to clipboard" button to instantly copy the output, so you can easily share it elsewhere if you so desire!

***

## 4. how it was made

this project was created with the following:

resources:
* [css tricks](https://css-tricks.com/)
* [mdn web docs](https://developer.mozilla.org/en-US/)

tools:
* [git](https://git-scm.com/)
* [github](https://github.com/)
* [visual studio code](https://code.visualstudio.com/)

languages:
* [html](https://developer.mozilla.org/en-US/docs/Web/HTML)
	- elements: [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body), [`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div), [`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head), [`h1`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), [`html`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html), [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p), [`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), [`textarea`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea), [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
* [css](https://developer.mozilla.org/en-US/docs/Web/CSS)
	- yeah i'm not gonna list all the css properties i used here
* [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
	- built-in objects: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [Number() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`String.fromCodePoint()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint), [`String.prototype.codePointAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt), [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	- statements and declarations: [Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block), [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return), [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
	- expressions and operators: [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), [Grouping operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping), [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors), [Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus), [Unary negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation), [Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition), [Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction), [Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), [Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality), [Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
	- web apis: [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard), [`Clipboard.writeText()`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText), [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element), [Element: click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement), [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), [`Navigator.clipboard`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)

additionally, the completion checklist from the original repository is copied here for future reference:

> ### Parte Obrigatória

> * [x] `README.md` adicionar informação sobre o processo e decisões do desenho.
> * [x] `README.md` explicar claramente quem são os usuários e as suas relações com o produto.
> * [x] `README.md` explicar claramente como o produto soluciona os problemas/necessidades dos usuários.
> * [x] Usar VanillaJS.
> * [x] **Não** usar `this`.
> * [x] Implementar `cipher.encode`.
> * [x] Implementar `cipher.decode`.
> * [X] Passar o linter com a configuração definida.
> * [X] Passar as provas unitárias.
> * [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e no mínimo 50% das _branches_.
> * [x] Interface que permita escolher o `offset` (chave de deslocamento) usava para cifrar/decifrar.
> * [x] Interface que permita escrever um texto para ser cifrado.
> * [x] Interface que mostre o resultado da cifra corretamente.
> * [x] Interface que permita escrever um texto para ser decifrado.
> * [x] Interface que mostre o resultado decifrado corretamente.

> ### Parte Opcional: "Hacker edition"

> * [x] Cifrar/decifrar minúsculas.
> * [X] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
> * [x] Permitir usar `offset` negativo.

***

## 5. fun facts

1. it is possible to make the whole app's functionality work with only a single function/method, rather than the separate ones for encoding and decoding as requested; and that's what i did. so `cipher.code` is the method that actually does all the work, while `cipher.encode` and `cipher.decode` merely pull its return value and pass it on to the built-in tests. they are only left in the code for that purpose.
2. as described in the [mdn documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), in javascript the remainder operator (%) does _not_ work as expected if, between the dividend and divisor, one is positive while the other is negative. assigning support for negative key values as an additional challenge while also linking to a video that talks about the operator but doesn't mention this quirk of it in js is a really nasty trap on the part of the original project!!