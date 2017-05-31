import {expect} from 'chai';

import Column from '../js/column';


describe('Column', () => {

    describe('play', () => {
        it('takes a token and returns a new Column with the first empty slot filled', () => {
            const column = new Column(6, ['red', 'red']);
            const expectedColumn = new Column(6, ['red', 'red', 'black']);

            expect(column.play('black')).to.deep.equal(expectedColumn);
        });

        it('throws an error if Column is already full', () => {
            const column = new Column(2, ['red', 'red']);

            try {
                column.play('black');
                expect.fail();
            } catch(error) {
                expect('Column already full').to.equal(error.message);
            }
        });
    })
});
