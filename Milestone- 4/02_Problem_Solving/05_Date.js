// Date

const today = new Date(); //Give today's Date
console.log(today);
console.log("-------------");


const date = new Date('2062-10-29'); //Month 9 cause idx start 0
console.log(date.getMonth());
console.log("-------------");


const specificDate = new Date(2091, 0, 26);
console.log(specificDate); //0 (Index to String)--> 1

specificDate.setMonth(10); //10 (Index to String)--> 11
console.log(specificDate.toLocaleString('en-GB')); //Great Bretain / Bangladesh


