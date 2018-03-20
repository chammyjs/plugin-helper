import chai from 'chai';
import AnswerType from '../src/AnswerType.js';

const expect = chai.expect;

describe( 'AnswerType', () => {

	it( 'exist', () => {
		expect( AnswerType ).to.exist;
	} );

	it( 'has property STRING', () => {
		expect( AnswerType.enumValues[ 0 ].name ).to.equal( 'STRING' );
	} );

	it( 'has property NUMBER', () => {
		expect( AnswerType.enumValues[ 1 ].name ).to.equal( 'NUMBER' );
	} );

	it( 'has property BOOLEAN', () => {
		expect( AnswerType.enumValues[ 2 ].name ).to.equal( 'BOOLEAN' );
	} );

	it( 'has property ARRAY', () => {
		expect( AnswerType.enumValues[ 3 ].name ).to.equal( 'ARRAY' );
	} );

	it( 'has property OBJECT', () => {
		expect( AnswerType.enumValues[ 4 ].name ).to.equal( 'OBJECT' );
	} );
} );
