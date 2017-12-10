import chai from 'chai';
import * as pluginHelper from '../src/index.js';
import Plugin from '../src/Plugin.js';
import Question from '../src/Question.js';

const expect = chai.expect;

describe( 'pluginHelper', () => {

	it( 'exists', () => {
		expect( pluginHelper ).to.exist;
	} );

	it( 'exposes Question and Plugin', () => {
		expect( pluginHelper ).to.have.all.keys( 'Question', 'Plugin' );
	} );

	describe( 'Question', () => {
		it( 'is a Question class', () => {
			expect( pluginHelper.Question ).to.equal( Question );
		} );
	} );

	describe( 'Plugin', () => {
		it( 'is a Plugin class', () => {
			expect( pluginHelper.Plugin ).to.equal( Plugin );
		} );
	} );
} );
