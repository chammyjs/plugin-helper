class Plugin {

	/**
	 * get name - getting the name of plugin
	 * @static
	 * @return {string}  name of plugin
	 */
	static get name() {
		throw new Error( 'Classes inheriting from Plugin must implement name' );
	}

	/**
	 * configure - function for setting plugin configuration as a array of questions
	 * @return {Object[]} Array of objects with questions
	 */
	configure() {
		throw new Error( 'Classes inheriting from Plugin must implement configure function' );
	}

	/**
	 * execute - do all the things plugin should do
	 * @param {Object} configuration - plugin configuration from template file
	 * @param {Object} [CLI] - Optional parameter with Interactive CLI functions
	 * @return {undefined}
	 */
	execute() {
		throw new Error( 'Classes inheriting from Plugin must implement execute function' );
	}

}

module.exports = Plugin;
