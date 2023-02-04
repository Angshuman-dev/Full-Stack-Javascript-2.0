const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sorted=ages.sort()
console.log(ages)

let min_age=Math.min(...ages);

let max_age=Math.max(...ages)

console.log(`Min : ${min_age} Max : ${max_age}`)

let median_age=ages[(ages.length)/2]

console.log(`median ${median_age}`)

let avg_age=ages.reduce(function (sum,item){
    return sum+item
},0)/(ages.length)

console.log(`avg : ${avg_age}`)

console.log(`range: ${max_age-min_age}`)

console.log(`Abs ${Math.abs(max_age-avg_age)}    ${Math.abs(min_age-avg_age)}`)