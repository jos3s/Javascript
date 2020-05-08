// While e Do while 

let i=0;

/* while(i<=10){
    console.log(i);
    i++;
}    
i=0;
do{
    console.log(i);
    i++;
}while(i<=10);
 */

function random(min, max) {
    const r=Math.random()*(max-min)+min;
    return Math.floor(r);
}
const min=1;
const max=30;
let rand=random(min,max);
let cont=0;

/* while(rand !== 10){
    cont++;
    rand=random(min,max);
    console.log(rand);
}
console.log('----')
console.log(cont); */

do{
    cont++;
    rand=random(min,max);
    console.log(rand);
}while(rand !==10);

console.log('----')
console.log(cont);