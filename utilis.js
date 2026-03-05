const sum = (a,b) => a+b;

const greeting = (name) => `Hello ${name}`;

const isEven =(number) => {
    if (number % 2 ==0){
        return true;
    }
    return false;
};
module.exports = {

    sum,
    greeting,
    isEven
};