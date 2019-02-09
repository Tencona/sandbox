import SandboxBase from './SandboxBase';

let nameGenerator = new SandboxBase(
	'Name Generator',
	[
		{ key: 'wordLength', name: 'Word Length', type: 'number' },
		{ key: 'firstLetter', name: 'First Letter', type: 'string' },
	],
	'string'
);
nameGenerator.func = function(fields) {
	//fields is an object containing key and value from the user input
	let wordLength = fields['wordLength']; //4;
	let firstLetter = fields['firstLetter']; //V;

	let generatedWord = 'test'; //name generator stuff
	return generatedWord;
};

export let funcs = [nameGenerator];
