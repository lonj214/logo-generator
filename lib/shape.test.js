const {circle, triangle, square} = require('./lib/shapes.js');

// Trying to test for a green circle->unit testing; The test checks whether objects(circle, triangle, square) can render properly by calling the render method and comparing result to expected svg string
describe('circle test', () => {
    test('Test for a green circle', () => {
        const shape = new circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="green"/>'
        );
    });
});

describe('triangle test', () => {
    test('Test for a black triangle', () => {
        const shape = new triangle();
        shape.setColor('black');
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="black"/>'
        );
    });
});

describe('square test', () => {
    test('Test for a pink square', () => {
        const shape = new square();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            '<rect x="73" y="130" width="160" fill="pink"/>'
        );
    });
});