//Junção de arrays

const num1=[1,2,3];
const num2=[4,5,6];
const num3=num1.concat(num2, 10);
console.log(num3);

const num4=[...num1,...num2, 12, ...[13,14,15]];
console.log(num4);