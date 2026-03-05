const sum = (a,b) => a+b;

const greeting = (name) => `Hello ${name}`;

const isEven =(number) => {
    if (number % 2 ==0){
        return true;
    }
    return false;
};

const Animals = ['cat', 'dog', 'monkey']
module.exports = {

    sum,
    greeting,
    isEven,
    Animals
};