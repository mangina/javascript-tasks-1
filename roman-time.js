var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);

var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function arabToRoman(number) {
    var result = '';
    var i = arab.length - 1;

    if (number === 0) {
        return '-';
    }

    while (number > 0) {
        if (number >= arab[i]) {
            result += roman[i];
            number -= arab[i];
        } else {
            i--;
        }
    }

    return result;
}

var checkRange = function (number, min, max) {
    if (number >= min && number <= max) {
        return number >= min && number <= max;
    }

};

function getRomanTime(hours, minutes) {
    if (!checkRange(hours, 0, 23) || !checkRange(minutes, 0, 59)) {
        console.log('Время указано не верно.');
        console.log('node less1 0<hours<23 0<minutes<59');
        return;
    }

    return arabToRoman(hours) + ':' + arabToRoman(minutes);
}

console.log(getRomanTime(hours, minutes));
/*
console.log("time1 ", getRomanTime(0, 0));
console.log("time2 ", getRomanTime(24, 0));
console.log("time3 ", getRomanTime(0, 24));
console.log("time4 ", getRomanTime(0, 60));
console.log("time5 ", getRomanTime(24, 24));
console.log("time6 ", getRomanTime(10, 10));
console.log("time7 ", getRomanTime(0, 59));
console.log("time8 ", getRomanTime(59, 0));
console.log("time9 ", getRomanTime(60, 0));
console.log("time10 ", getRomanTime(24, 60));
console.log("time11 ", getRomanTime(23, 59));
*/
