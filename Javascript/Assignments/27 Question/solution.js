function prime(no) {
    console.log(no);
    let flag;
    for (let i = 2; i < no; i++) {
        flag=true
        if (no % i == 0) {
           flag=false;
           break;
        }
        
       
            
        
    }
    return flag;
}

let primeArr=[0,1,2]

for (let i = 2; i <= 100; i++) {
    
  let isPrime=  prime(i);
  if (isPrime){
    primeArr.push(i)
  }
 

}
console.log(primeArr);