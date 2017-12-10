import chai from 'chai';
import Type from '../src/Type.js';

const expect = chai.expect;

describe( 'Type', () => {

	it( 'exist', () => {
		expect( Type ).to.exist;
	} );

	it( 'has property STRING', () => {
		expect( Type.enumValues[ 0 ].name ).to.equal( 'STRING' );
	} );

	it( 'has property NUMBER', () => {
		expect( Type.enumValues[ 1 ].name ).to.equal( 'NUMBER' );
	} );

	it( 'has property BOOLEAN', () => {
		expect( Type.enumValues[ 2 ].name ).to.equal( 'BOOLEAN' );
	} );

	it( 'has property ARRAY', () => {
		expect( Type.enumValues[ 3 ].name ).to.equal( 'ARRAY' );
	} );

	it( 'has property OBJECT', () => {
		expect( Type.enumValues[ 4 ].name ).to.equal( 'OBJECT' );
	} );
} );
