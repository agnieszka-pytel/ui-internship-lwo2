// import { dropElements } from './drop-elements';

xdescribe('Drop elements', () => {

    test('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]', () => {
        expect(JSON.stringify(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))).toBe('[3,4]');
    });

    test('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () => {
        expect(JSON.stringify(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))).toBe('[1,0,1]');
    });

    test('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3]', () => {
        expect(JSON.stringify(dropElements([1, 2, 3], function(n) {return n > 0;}))).toBe('[1,2,3]');
    });

    test('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []', () => {
        expect(JSON.stringify(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))).toBe('[]');
    });

    test('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4]', () => {
        expect(JSON.stringify(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))).toBe('[7,4]');
    });

    test('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]', () => {
        expect(JSON.stringify(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))).toBe('[3,9,2]');
    });

});
