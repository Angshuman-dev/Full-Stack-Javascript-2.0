// let datenow = new Date();

// console.log(datenow); // "2021-07-28T18:11:11.282Z"
// console.log(generateDatabaseDateTime(datenow)); // "2021-07-28 14:11:33"

// function generateDatabaseDateTime(date) {
//   return date.toISOString().replace("T"," ").substring(0, 19);
// }

const date = new Date();

const year = date.getUTCFullYear();
const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Month is 0-based
const day = String(date.getUTCDate()).padStart(2, '0');

const hour = String(date.getUTCHours()).padStart(2, '0');
const minute = String(date.getUTCMinutes()).padStart(2, '0');
const second = String(date.getUTCSeconds()).padStart(2, '0');

const strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

console.log(strDate);