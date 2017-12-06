class Plugin {

	/**
	 * constructor - throw an Error when Plugin class is used directely
	 */
	constructor(){
		if ( new.target === Plugin ) {
			throw new Error( 'Plugin class cannot be used directly, it must be inherited' );
		}
	}

	/**
	 * get pluginName - getting the name of plugin
	 * @static
	 * @return {string}  name of plugin
	 */
	static get pluginName() {
		throw new Error( 'Classes inheriting from Plugin must contain pluginName property' );
	}

	/**
	 * configure - function for setting plugin configuration as a array of questions
	 * @return {Object[]} Array of objects with questions
	 */
	configure() {
		throw new Error( 'Classes inheriting from Plugin must implement configure method' );
	}

	/**
	 * execute - do all the things plugin should do
	 * @param {Object} configuration - plugin configuration from template file
	 * @param {Object} [CLI] - Optional parameter with Interactive CLI functions
	 * @return {undefined}
	 */
	execute() {
		throw new Error( 'Classes inheriting from Plugin must implement execute method' );
	}

}

module.exports = Plugin;
