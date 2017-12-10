import chai from 'chai';
import Plugin from '../src/Plugin.js';
import EmptyPlugin from './fixtures/EmptyPlugin.js';
import CompletePlugin from './fixtures/CompletePlugin.js';

const expect = chai.expect;

describe( 'Plugin', () => {

	it( 'is a class', () => {
		expect( Plugin ).to.be.a( 'function' );
	} );

	it( 'throw an Error when called directly', () => {
		expect( () => {
			new Plugin();
		} ).to.throw( 'Plugin class cannot be used directly, it must be inherited'  );
	} );

	it( 'does not throw an Error when inherited', () => {
		expect( () => {
			new EmptyPlugin();
		} ).not.to.throw( 'Plugin class cannot be used directly, it must be inherited' );
	} );

	describe( 'configure', () => {

		it( 'is a function', () => {
			expect( Plugin.prototype.configure ).to.be.a( 'function' );
		} );

		it( 'throw an Error when when inherited, but not overwritten', () => {
			expect( new EmptyPlugin().configure ).to.throw();
		} );

		it( 'not to throw an Error() when inherited', () => {
			expect( new CompletePlugin().configure ).to.not.throw();
		} );

	} );

	describe( 'execute', () => {

		it( 'is a function', () => {
			expect( Plugin.prototype.execute ).to.be.a( 'function' );
		} );

		it( 'throw an Error when when inherited, but not overwritten', () => {
			expect( new EmptyPlugin().execute ).to.throw();
		} );

		it( 'does not to throw an Error() when inherited', () => {
			expect( new CompletePlugin().execute ).to.not.throw();
		} );

	} );

	describe( 'pluginName', () => {

		it( 'is static', () => {
			expect( CompletePlugin.pluginName ).to.exist;
		} );

		it( 'is a string when overwritten', () => {
			expect( CompletePlugin.pluginName ).to.be.a( 'string' );
		} );

		it( 'throw an Error when does not overwritten', () => {
			expect( () => {
				EmptyPlugin.pluginName();
			} ).to.throw();
		} );
	} );

} );
