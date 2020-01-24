import { largestOfFour, largestOfFourReduce } from './largest-of-four';

describe('largest-of-four', () => {
    test(`largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array`, () => {
        expect(Array.isArray(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))).toBe(true);
    });

    test(`largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]] should return [27,5,39,1001]`, () => {
        expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([27,5,39,1001]);
    });

    test(`largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]`, () => {
        expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([9, 35, 97, 1000000]);
    });

    test(`largestOfFourReduce([[1, 7, 2, 2], [10, 11, 60, 37], [100, 26, 10, 2], [1000000, 101, 765, 1]]) should return [9, 35, 97, 1000000]`, () => {
        expect(largestOfFourReduce([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([9, 35, 97, 1000000]);
    });
});
