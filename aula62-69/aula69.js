//For each

const nums=[5,50,80,1,2,3,5,8,7,11,15,22,27];

//+ nums.forEach(valor,index,array);
nums.forEach((valor,i)=> console.log(`${i}: ${valor}`));

let total=0;
nums.forEach(valor=> total+=valor);
console.log(total);