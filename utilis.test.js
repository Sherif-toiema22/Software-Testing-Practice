const {sum} = require('./utilis');

test('sum - should return 2 + 3 = 5', () => {
    const result = sum (2,3);
    expect(result).toBe(5);
});