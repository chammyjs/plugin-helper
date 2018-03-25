import { Enum } from 'enumify';

/**
 * Represents types of answer
 */
class AnswerType extends Enum {}

/**
 * Available types:
 * - STRING
 * - NUMBER
 * - BOOLEAN
 * - ARRAY
 * - OBJECT
 */
AnswerType.initEnum( [ 'STRING', 'NUMBER', 	'BOOLEAN', 'ARRAY', 'OBJECT' ] );

export default AnswerType;
