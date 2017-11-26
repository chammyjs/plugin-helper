const chai = require( 'chai' );
const expect = chai.expect;
const Plugin = require( '../src/Plugin' );
const EmptyPlugin = require( './fixtures/EmptyPlugin' );
const CompletePlugin = require( './fixtures/CompletePlugin' );
describe( 'Plugin', () => {

	it( 'is a class', () => {
		expect( Plugin ).to.be.a( 'function' );
	} );

	describe( 'configure', () => {

		it( 'is a function', () => {
			expect( new CompletePlugin().configure ).to.be.a( 'function' );
		} );

		it( 'throw an Error when not inherited', () => {
			expect( new EmptyPlugin().configure ).to.throw();
		} );

		it( 'not to throw an Error() when inherited', () => {
			expect( new CompletePlugin().configure ).to.not.throw();
		} );

	} );

	describe( 'execute', () => {

		it( 'is a function', () => {
			expect( new CompletePlugin().execute ).to.be.a( 'function' );
		} );

		it( 'throw an Error when not inherited', () => {
			expect( new EmptyPlugin().execute ).to.throw();
		} );

		it( 'not to throw an Error() when inherited', () => {
			expect( new CompletePlugin().execute ).to.not.throw();
		} );

	} );

	describe( 'name', () => {

		it( 'is static', () => {
			expect( CompletePlugin.name ).to.exist;
		} );

		it( 'is a string when complete', () => {
			expect( CompletePlugin.name ).to.be.a( 'string' );
		} );

	} );

} );
