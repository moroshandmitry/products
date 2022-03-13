const range = (start, end) => {
    const numStart = Number(start);
    const numEnd = Number(end);
    const length = numEnd - numStart + 1;

    if (numStart < 0 || numEnd < 0) {
        return [];
    }

    return Array.from({ length }, (_, idx) => idx + numStart);
};

describe("Range of array for pagination", () => {
    const stringifiedArray = array => JSON.stringify(array)

    it('range(0, 3) - [0, 1, 2, 3]', () => {
        expect(stringifiedArray(range(0, 3))).toBe(stringifiedArray([0, 1, 2, 3]));
    });

    it(`range('0', '3') - [0, 1, 2, 3, 4]`, () => {
        expect(stringifiedArray(range('0', '3'))).toEqual(stringifiedArray([0, 1, 2, 3]));
    });

    it('range(20, 24) - [20, 21, 22, 23, 24]', () => {
        expect(stringifiedArray(range(20, 24))).toEqual(stringifiedArray([20, 21, 22, 23, 24]));
    });

    it('range(-7, -7) - []', () => {
        expect(stringifiedArray(range(-7, -7))).toStrictEqual(stringifiedArray([]));
    });

    it(`range('string', 'string') - []`, () => {
        expect(stringifiedArray(range('string', 'string'))).toStrictEqual(stringifiedArray([]));
    });

})
