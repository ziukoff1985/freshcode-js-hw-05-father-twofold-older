'use strict';

// TODO First version with for loop

const fatherX2OlderThenSon = (fatherAge, sonAge) => fatherAge / sonAge > 2;

function validateAge(fatherAge, sonAge) {
    if (
        fatherAge < 0 ||
        sonAge < 0 ||
        fatherAge - sonAge < 15 ||
        typeof fatherAge !== 'number' ||
        typeof sonAge !== 'number'
    ) {
        return false;
    }
    return true;
}

function calcResultByX(fatherAge, sonAge) {
    const isFatherX2OlderThenSon = fatherX2OlderThenSon(fatherAge, sonAge);

    for (let i = 0; i <= fatherAge; i++) {
        if (isFatherX2OlderThenSon) {
            const result = (fatherAge + i) / (sonAge + i);
            if (result === 2) return i;
        }
        if (!isFatherX2OlderThenSon) {
            const result = (fatherAge - i) / (sonAge - i);
            if (result === 2) return i;
        }
    }
}

function calculateAgeDiff(fatherAge, sonAge) {
    const isDataValid = validateAge(fatherAge, sonAge);

    if (!isDataValid) {
        return 1;
    }

    if (fatherAge / sonAge === 2) {
        return 2;
    }

    const result = calcResultByX(fatherAge, sonAge);
    return result;
}

function printResult(fatherAge, sonAge) {
    const result = calculateAgeDiff(fatherAge, sonAge);

    const isFatherX2OlderThenSon = fatherX2OlderThenSon(fatherAge, sonAge);

    if (result === 1) {
        console.log(
            `❌ Invalid data: (${fatherAge}, ${sonAge}), age should be a number, age difference should be more than 15, ages should be more than 0, try again`
        );
        return;
    }
    if (result === 2) {
        console.log(
            `❗ Father is twofold older now, Father age: ${fatherAge}, Son age: ${sonAge}`
        );
        return;
    }
    if (isFatherX2OlderThenSon) {
        console.log(
            `❗ Father will be twofold older in ${result} years, when Father's age will be: ${
                fatherAge + result
            }, Son's age will be: ${sonAge + result}`
        );
        return;
    }
    if (!isFatherX2OlderThenSon) {
        console.log(
            `❗ Father was twofold older ${result} years ago, when Father's age was: ${
                fatherAge - result
            }, Son's age was: ${sonAge - result}`
        );
        return;
    }
}

printResult(80, 10);
