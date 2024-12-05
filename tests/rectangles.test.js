import { strict as assert} from 'assert';
import { Rectangle } from '../exercises/rectangles.js';

describe('Rectangles', () => {

    it('should return the correct area of the rectangle', () => {
        const width = 10;
        const height = 10;

        const rectangle = new Rectangle(width, height);
        assert.strictEqual(rectangle.area(), 100)
        
    });

    it('should return the correct perimeter of the rectangle', () => {
        const width = 10;
        const height = 10;

        const rectangle = new Rectangle(width, height);
        assert.strictEqual(rectangle.perimeter(), 40)
        
    })

});