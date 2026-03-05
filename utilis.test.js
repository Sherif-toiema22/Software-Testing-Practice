const {sum,greeting,isEven, Animals, getOrderById} = require('./utilis');

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

describe('getOrderById', () => {
    it ('should return order of id = 1',() =>{
        const res = getOrderById(1);
        expect (res).toMatchObject({id: 1, price : 10 });
        expect(res).toHaveProperty('id' ,1);
    });
    // it ('should throw error if id is not defined ', () =>{
    //     expect(() => getOrderById()).tothrowError('id is not defined');

    // });
});