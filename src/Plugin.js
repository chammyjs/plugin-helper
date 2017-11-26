class Plugin {

	static get name(){
		throw new Error( 'Classes inheriting from Plugin must implement name function' );
	}

	configure(){
		throw new Error( 'Classes inheriting from Plugin must implement configure function' );
	}

	execute(){
		throw new Error( 'Classes inheriting from Plugin must implement execute function' );
	}

}

module.exports = Plugin;
