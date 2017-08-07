const expect = require('chai').expect;
const Calc = require('../calc');

let myCalc = new Calc();

describe('Can do arithmetic', () => {
    describe('Can add numbers', () => {
        it('can add two pos ints', () => {
            expect(myCalc.add(1,1)).to.equal(2);
        });
        it('can add an int to zero', () => {
            expect(myCalc.add(1,0)).to.equal(1);
        });
    });
    describe('Can subtract numbers', () => {
        it('can subtract two pos ints', () => {
            expect(myCalc.subtract(1,1)).to.equal(0);
        });
        it('can subtract zero from an int', () => {
            expect(myCalc.subtract(1,0)).to.equal(1);
        });
    });
    describe('Can divide properly', () => {
        it('can divide a by b where a > b, neither = 0', () =>{
            expect(myCalc.divide(10,2)).to.equal(5);
        });
        it('can divide a by b where a < b, neither = 0', () =>{
            expect(myCalc.divide(2,10)).to.equal(0.2);
        });
        it('can divide a by b where a = 0, b != 0', () =>{
            expect(myCalc.divide(0,10)).to.equal(0);
        });
        it('can divide a by b where a != 0, b = 0', () =>{
            expect(myCalc.divide(10,0)).to.equal(Infinity);
        });
    });
    describe('Can add nums async', () => {
        it('can add two ints async', (done) => {
            myCalc.addAsync(3, 2, (val) => {
                if(val === 5) {
                    done();
                } else {
                    done(new Error('nope'));
                }
            });
        });
    });
    describe('Can subtract nums async', () => {
        it('can subtact two ints async', (done) => {
            myCalc.subAsync(3, 2, (val) => {
                if(val === 1) {
                    done();
                } else {
                    done(new Error('nope'));
                }
            });
        });
    });
});
