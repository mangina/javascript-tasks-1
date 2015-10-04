var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);

var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function arabInRoman(number) {
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
        return true;
    }
    return false;
};

function getRomanTime(hours, minutes) {
    if (!checkRange(hours, 1, 24) || !checkRange(minutes, 0, 59)) {
        console.log('Вы ошиблись.');
        console.log('node less1 1<hours<24 0<minutes<59');
        return;
    }

    return arabInRoman(hours) + ':' + arabInRoman(minutes);
}

console.log(getRomanTime(hours, minutes));
/*
console.log("time ", getRomanTime(0, 0));
console.log("time ", getRomanTime(24, 0));
console.log("time ", getRomanTime(0, 24));
console.log("time ", getRomanTime(0, 60));
console.log("time ", getRomanTime(24, 24));
console.log("time ", getRomanTime(10, 10));
console.log("time ", getRomanTime(0, 59));
console.log("time ", getRomanTime(59, 0));
console.log("time ", getRomanTime(60, 0));
console.log("time ", getRomanTime(24, 60));
console.log("time ", getRomanTime(24, 59));
*/
