const charsExtended =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-';
const charsLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const charsDigits = '0123456789';

export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomStringHelper = (
	chars: string,
	length: number,
): string => {
	let result = '';

	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return result;
};

export const getRandomLetterString = (length: number) =>
	getRandomStringHelper(charsLetters, length);
export const getRandomDigitsString = (length: number) =>
	getRandomStringHelper(charsDigits, length);
export const getRandomExtendedString = (length: number) =>
	getRandomStringHelper(charsExtended, length);

export const getRandomArrayValue = <TArrayValue>(
	arr: TArrayValue[],
): TArrayValue => {
	return arr[getRandomInt(0, arr.length - 1)];
};

export const getRandomSentence = (wordsCount: number) => {
	let sentence = '';

	for (let i = 0; i < wordsCount; i++) {
		const wordLength = getRandomInt(2, 9);
		const word = getRandomLetterString(wordLength);
		if (sentence === '') {
			sentence += word;
		} else {
			sentence += `${getRandomArrayValue([', ', ': ', '- ', ' '])}${word}`;
		}
	}

	sentence += getRandomArrayValue(['.', '!', '?']);

	return sentence;
};

export const getRandomBoolean = () => {
	return Math.random() < 0.5;
};
