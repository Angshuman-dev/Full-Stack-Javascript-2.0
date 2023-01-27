let age=prompt('Enter your age:')

if (age>18){
    console.log('You are old enough to drive')
}
else{
    let years=18-age;
    console.log(`Wait for ${years} more`)
}