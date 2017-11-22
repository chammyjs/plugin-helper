class Plugin {

	/**
	 * constructor - description
	 *
	 * @param  {type} name          description
	 * @param  {type} requires = [] description
	 * @param  {type} options = []  description
	 * @return {type}               description
	 */
	constructor( name, requires = [], options = [] ) {
		this.name = name;
		this.requires = requires;
		this.options = options;
	}

	/**
	 * execute - description
	 *
	 * @return {type}  description
	 */
	execute(){
		// eslint-disable-next-line no-console
		console.log( 'This plugin doesn\'t do anything useful yet' );
	}
}
module.exports = Plugin;
