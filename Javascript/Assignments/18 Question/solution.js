let year = prompt("Enter year");
let month = prompt("Enter Month")
if (year%4==0 && month==2) {
        
        // const getDays = (year, month) => {
        //     return new Date(year, month, 0).getDate();
        // };
        console.log("number of days in a month", 29)
    }
else{
    // let month = prompt("Enter Month")
        const getDays = (year, month) => {
            return new Date(year, month, 0).getDate();
        };
        console.log("number of days in a month", getDays(year, month))
}