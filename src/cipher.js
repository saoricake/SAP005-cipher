const cipher = {
	encode(offset, string) {
		function formula(match) {
			let aCodePoint;
			if (/[A-Z]/.test(match)) aCodePoint = 65;
			if (/[a-z]/.test(match)) aCodePoint = 97;

			let outputCodePoint = ((match.codePointAt(0) + offset - aCodePoint) % 26) + aCodePoint;
			return String.fromCodePoint(outputCodePoint);
		}

		return string.replace(/[A-Z]/gi, formula);
	},

	decode(offset, string) {
		function formula(match) {
			let aCodePoint;
			if (/[A-Z]/.test(match)) aCodePoint = 65;
			if (/[a-z]/.test(match)) aCodePoint = 97;

			let outputCodePoint = ((((match.codePointAt(0) - offset - aCodePoint) % 26) + 26) % 26) + aCodePoint;
			return String.fromCodePoint(outputCodePoint);
		}

		return string.replace(/[A-Z]/gi, formula);
	},
}

export default cipher;
