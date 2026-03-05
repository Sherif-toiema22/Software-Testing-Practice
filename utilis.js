const sum = (a,b) => a+b;

const greeting = (name) => `Hello ${name}`;

const isEven =(number) => {
    if (number % 2 ==0){
        return true;
    }
    return false;
};

const getOrderById = (id) => {
    if(!id){
        throw new Error('id is not defined');
    }
    return {id: 1, price:10 ,date:'2022'};
};

const Animals = ['cat', 'dog', 'monkey']
module.exports = {

    sum,
    greeting,
    isEven,
    Animals,
    getOrderById
};