/**
 * Question -represents a question for the plugin CLI
 */
class Question {

	/**
	 * constructor - Question
	 *
	 * @param  {string} name              name of option
	 * @param  {string} question          a question that user will receive during creation template
	 * @param  {Type} answerType          the type of answer
	 * @todo                              writing enum with possible types of answer
	 * @param  {type} [defaultAnswer = ''] default answer if user doesn't write any, if not given, then emtpy string
	 */

	constructor( name, question, answerType, defaultAnswer = '' ) {
		this.name = name;
		this.question = question;
		this.answerType = answerType;
		this.defaultAnswer = defaultAnswer;
	}
}
module.exports = Question;
