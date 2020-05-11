//Filter, Map e Reduce

const nums=[5,50,80,1,2,3,5,8,7,11,15,22,27];

const nums2=nums
    .filter(n => n%2==0)
    .map(n => n*2)
    .reduce((acumulador, n) => acumulador+n);
console.log(nums2);