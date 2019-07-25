import { maxNumber } from './index';

describe('maxNumber', () => {
	describe('given a empty array', () => {
		it('returns 0', () => {
			expect(maxNumber([])).toEqual(0);
		});
	});
	describe('given an array of elements', () => {
		it('returns maxNumber of Array', () => {
			expect(maxNumber([1, 2, 3])).toEqual(3);
		});
	});
});
