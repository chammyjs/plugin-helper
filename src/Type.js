const Enum  = require( 'enumify' );

class Type extends Enum {}

Type.initEnum( [ 'STRING', 'NUMBER', 	'BOOLEAN', 'ARRAY', 'OBJECT' ] );

module.exports = Type;
