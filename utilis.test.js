const {sum,greeting,isEven, Animals} = require('./utilis');

test('sum - should return 2 + 3 = 5', () => {
    const result = sum (2,3);
    expect(result).toBe(5);
});

test('greeting - should return Hello mahmoud', () => {
    expect(greeting ('mahmoud')).toMatch('Hello mahmoud');

});

test('isEven -should return true for 4',() =>{
    expect (isEven(4)).toBeTruthy();
});


test('isEven -should return false for 7',() =>{
    expect (isEven(7)).toBeFalsy();
});

test('validation',() => {
    let x;
    expect(x).not.toBeDefined();
});

test('animals - should return true for cat', () =>{
    expect(Animals).toContain('cat');
});
