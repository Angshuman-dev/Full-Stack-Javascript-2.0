let no=prompt("Enter a number");

for (i=2;i<no;i++)
{
    if (no%i==0){
    console.log('NOt PRIME Number')
    break;
    }
    else{
        console.log("PRIME")
    }
}