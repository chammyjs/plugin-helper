import { Enum } from 'enumify';

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

export default Type;
