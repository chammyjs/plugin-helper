const chai = require( 'chai' );
const expect = chai.expect;
const pluginHelper = require( '../src/main' );
describe( 'pluginHelper', () => {
	it( 'exists', () => {
		expect( pluginHelper ).to.exist;
	} );
} );
