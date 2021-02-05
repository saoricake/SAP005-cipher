const cipher = {
	code(offset, string) {
		function formula(match) {
			var aCodePoint;
			if (/[A-Z]/.test(match)) aCodePoint = 65;
			if (/[a-z]/.test(match)) aCodePoint = 97;

			var outputCodePoint = ((((match.codePointAt(0) + offset - aCodePoint) % 26) + 26) % 26) + aCodePoint;
			return String.fromCodePoint(outputCodePoint);
		}

		return string.replace(/[A-Z]/gi, formula);
	},

	encode(offset, string) {
		return cipher.code(offset, string);
	},

	decode(offset, string) {
		return cipher.code(- offset, string);
	},
}

export default cipher;
