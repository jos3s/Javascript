//Break e Continue

const numeros=[1,2,3,4,5,6,7,8,9];

for(let num in numeros){
    if(num%2==0) continue;
    console.log(num);
}
for(let num in numeros){
    console.log(num);
    if(num==5) break;
} 