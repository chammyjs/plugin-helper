const { Enum }  = require( 'enumify' );

/**
 * Represents types of answer
 */
class Type extends Enum {}

/**
 * Available types:
 * - STRING
 * - NUMBER
 * - BOOLEAN
 * - ARRAY
 * - OBJECT
 */
Type.initEnum( [ 'STRING', 'NUMBER', 	'BOOLEAN', 'ARRAY', 'OBJECT' ] );

module.exports = Type;
