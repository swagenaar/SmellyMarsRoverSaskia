import { describe, expect, it } from 'vitest';
import { myFunctionUnderTest } from './app';

describe('My test case', () => {
    it.each([
        {
            a: 1,
            b: 3,
            expected: 'Hello World!',
        },
        {
            a: 2,
            b: 5,
            expected: 'Hello World!',
        },
    ])('should do something parametrized', ({ a, b, expected }) => {
        expect(myFunctionUnderTest(a, b)).toEqual(expected);
    });


    it('should do something singular', () => {
        expect(myFunctionUnderTest(0, 0)).toEqual('Hello World!');
    });
});
