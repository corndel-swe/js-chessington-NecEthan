import { strict as assert} from 'assert';
import { Maths } from '../exercises/maths.js';

describe('Maths', () => {

    it('should have PI defined and equal to 3.14', () => {
        assert.equal(typeof Maths.PI, 'number');
        assert.equal(Maths.PI, 3.14);
    });

    it('should return the largest number out of the two numbers', () => {
        const num1 = 1;
        const num2 = 5
        const result = Maths.max(num1, num2);
        assert.strictEqual(result, num2);
    });

    it('should return the same number when given a whole number', () => {
        assert.strictEqual(Maths.round(100), 100)
    });

    it('should round down the number that is returned', () => {
        assert.strictEqual(Maths.round(100.4), 100);
    });

    it('should round up if decimal part is greater or equal to 0.5', () => {
        assert.strictEqual(Maths.round(100.5), 101);
        assert.strictEqual(Maths.round(100.7), 101);
    });

    it('should return the absolute value', () => {
        assert.strictEqual(Maths.round(-100), 100);
    });
});