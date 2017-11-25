class Question {

	/**
	 * constructor - description
	 *
	 * @param  {type} name                description
	 * @param  {type} question            description
	 * @param  {type} answerType          description
	 * @param  {type} defaultaAnswer = '' description
	 * @return {type}                     description
	 */
	constructor( name, question, answerType, defaultaAnswer = '' ) {
		this.name = name;
		this.question = question;
		this.answerType = answerType;
		this.defaultAnswer = defaultaAnswer;
	}
}
module.exports = Question;
