const country=['India','China','Japan','Ethiopia'];

if (country.includes('Ethiopia')){
    
    console.log(country[country.indexOf('Ethiopia')].toUpperCase())
}
else{
    country.push('Ethiopia')
}

console.log(country)