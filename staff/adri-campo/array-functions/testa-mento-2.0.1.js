console.log('%c ¡¡¡TESTING THE CODE 👨🏼‍🦰💻!!!', 'background: crimson; color: white; display: block; font-size: 30px');

/**
 * Describes a test suite.
 * 
 * @param {string} title The test suite title.
 * @param {*} expression The tests to be run.
 * 
 * @version 2.0.1
 */
function describe(title, expression) {
	console.log('%c' + title, 'font-weight: bold; color: blue;');

	expression();
}

/**
 * Runs a unit test.
 * 
 * @param {string} title The test unit title.
 * @param {Function} expression The test to evaluate.
 * @param {Function} onError A callback to evaluate possible error.
 */
function it(title, expression/*, onError*/) {
	try {
		expression();

		console.log('%c' + title + ' ✔', 'color: green;');
	} catch (error) {
		console.log('%c' + title, 'color: red;', error);
	}
}

/**
 * Checks wether a value matches a condition.
 * 
 * @param {*} target 
 */
function expect(target) {
	return {
		/**
		 * Checks result matches exactly an expected value.
		 * 
		 * @param {*} expected The expected value to match against result.
		 */
		toBe: function (expected) {
			if (target !== expected) throw new Error('expected ' + expected + ', but got ' + target);
		},

		toThrowError(message) {
			var succeded = false;

			try {
				target();

				succeded = true;
			} catch (error) {
				if (error.message !== message) throw new Error('expected ' + message + ', but got ' + error.message);
			} finally {
				if (succeded) throw Error('expected to throw error');
			}
		},

		toThrow(type, message) {
			var succeded = false;

			try {
				target();

				succeded = true;
			} catch (error) {
				if (!(error instanceof type)) throw new Error('expected ' + type.name + ', but got ' + error.constructor.name);
				if (error.message !== message) throw new Error('expected ' + message + ', but got ' + error.message);
			} finally {
				if (succeded) throw Error('expected to throw error');
			}
		}
	}
}