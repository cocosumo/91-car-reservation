import {describe, expect, it} from '@jest/globals';
import {fetchCars} from './fetchCars';

describe('fetchCars', () => {
	it('should return cars', async () => {

		const result = await fetchCars();

		console.log(result);

		expect(result).toBeTruthy();
	});

});