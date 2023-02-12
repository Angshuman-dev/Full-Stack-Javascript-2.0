// a>
let str=''
for (let i=1;i<=3;i++)
{
    for(let j=1;j<=i;j++){
        str+='*';        
    }
        str+='\n'
}
console.log(str);

// b>


let str2=''
for (let i=1;i<=3;i++)
{
    for(let j=1;j<=3;j++){
        str2+='*';        
    }
        str2+='\n'
}
console.log(str2);

// c>

let str3=''
for (let i=1;i<=3;i++)
{
    for(let j=3;j<=1;j--){
        str3+=' ';
        
    }
    for (let z = 1; z<=5; index++) {
        str+='*';
        
    }        
        str3+='\n'
}
console.log(str3);