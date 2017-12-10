import Plugin from '../../src/Plugin.js';
import Question from '../../src/Question.js';

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

export default CompletePlugin;
