const chai = require( 'chai' );
const expect = chai.expect;
const Question = require( '../src/Question' );

describe( 'Question', () => {

	it( 'is a class', () => {
		expect( new Question() ).to.be.an.instanceof( Question );
	} );

	it( 'has name property', () => {
		const q = new Question( );
		expect( q ).to.have.own.property( 'name' );
	} );

	it( 'has question property', () => {
		const q = new Question( );
		expect( q ).to.have.own.property( 'question' );
	} );

	it( 'has answerType property', () => {
		const q = new Question( );
		expect( q ).to.have.own.property( 'answerType' );
	} );

	it( 'has defaultAnswer property', () => {
		const q = new Question( );
		expect( q ).to.have.own.property( 'answerType' );
	} );

	it( 'has property defaultAnswer with empty string as value, if no value given', () => {
		const q = new Question( );
		expect( q.defaultAnswer ).to.equal( '' );
	} );
} );
