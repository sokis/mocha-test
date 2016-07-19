import assert from 'assert';
import mocha from 'mocha';

global.assert = assert;
global.suite = mocha.suite;
global.suiteSetup = mocha.suiteSetup;
global.setup = mocha.setup;
global.test = mocha.test;

//test case
suite('Array', () => {

	suiteSetup(() => {
		//suiteSetup will run only 1 time in suite Array, before all suite
		console.log('suitSetup...');

	});


	setup(() => {
		//setup will run 1 time before every suite runs in suite Array
		console.log('steup..');
	});

	suite('indexOf()', () => {
		test('should return -1 when not present', () => {
			assert.equal(-1, [1, 2, 3].indexOf(4));
		})
	});

});