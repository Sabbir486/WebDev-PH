// Leap Year

function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){ //1900 --> Not Leap Year
        return true;
    }

    else if(year % 100 === 0 && year %400 == 0){   //2000 --> Leap Year
        return true;
    }

    else{
        return false;
    }
}

const leapYear = isLeapYear(2000 );
console.log(leapYear);

const leapYear1 = isLeapYear(1900 );
console.log(leapYear1);
