'use strict';

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
    for (let i = 0; i <= fatherAge; i++) {
        if (fatherAge / sonAge > 2) {
            const result = (fatherAge + i) / (sonAge + i);
            if (result === 2) return i;
        }
        if (fatherAge / sonAge < 2) {
            const result = (fatherAge - i) / (sonAge - i);
            if (result === 2) return i;
        }
    }
}

function calculateAgeDiff(fatherAge, sonAge) {
    const isDataValid = validateAge(fatherAge, sonAge);

    if (!isDataValid) {
        console.log('Entered invalid data');
        return null;
    }

    if (fatherAge / sonAge === 2) {
        console.log('Father is twofold older now');
        return true;
    }

    const result = calcResultByX(fatherAge, sonAge);
    console.log(result);
    return result;
}

function printResult(fatherAge, sonAge) {
    const result = calculateAgeDiff(fatherAge, sonAge);

    if (result === null) {
        console.log(
            `❌ Invalid data: (${fatherAge}, ${sonAge}), age should be a number, age difference should be more than 15, ages should be more than 0, try again`
        );
    }
    if (result === true) {
        console.log(
            `❗ Father is twofold older now, Father age: ${fatherAge}, Son age: ${sonAge}`
        );
    }
    if (fatherAge / sonAge > 2) {
        console.log(
            `❗ Father will be twofold older in ${result} years, Father age: ${fatherAge}, Son age: ${sonAge}`
        );
    }
    if (fatherAge / sonAge < 2) {
        console.log(
            `❗ Father was twofold older ${result} years ago, Father age: ${fatherAge}, Son age: ${sonAge}`
        );
    }
}

// calculateAgeDiff(80, 17);
printResult(80, 17);
