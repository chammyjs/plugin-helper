const Plugin = require( '../../src/Plugin' );
const Question = require( '../../src/Question' );

class CompletePlugin extends Plugin {

	static get pluginName() {
		return 'LittleSweetyKitty';
	}

	configure() {
		return  [ new Question( 'name', 'How are you?', 'string', 'blabla' ) ];
	}

	execute(  ) {
		return;
	}
}
module.exports = CompletePlugin;
