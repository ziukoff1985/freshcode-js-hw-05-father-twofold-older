'use strict';

const INVALID_DATA = 0;
const TWOFOLD_OLDER_NOW = -1;

const fatherMoreThenX2OlderThenSon = (fatherAge, sonAge) =>
    fatherAge / sonAge > 2;

function validateAge(fatherAge, sonAge) {
    if (
        typeof fatherAge === 'number' &&
        typeof sonAge === 'number' &&
        fatherAge > 0 &&
        sonAge > 0 &&
        fatherAge - sonAge >= 15
    ) {
        return true;
    }
    return false;
}

function calcResultByX(fatherAge, sonAge) {
    const isFatherMoreThenX2OlderThenSon = fatherMoreThenX2OlderThenSon(
        fatherAge,
        sonAge
    );

    if (isFatherMoreThenX2OlderThenSon) {
        return fatherAge - 2 * sonAge;
    }

    return 2 * sonAge - fatherAge;
}

function calculateAgeDiff(fatherAge, sonAge) {
    const isDataValid = validateAge(fatherAge, sonAge);

    if (!isDataValid) return INVALID_DATA;

    if (fatherAge / sonAge === 2) return TWOFOLD_OLDER_NOW;

    return calcResultByX(fatherAge, sonAge);
}

function printResult(fatherAge, sonAge) {
    const result = calculateAgeDiff(fatherAge, sonAge);

    switch (result) {
        case INVALID_DATA:
            console.log(
                `❌ Invalid data: (${fatherAge}, ${sonAge}), age should be a number, age difference should be more than 15, ages should be more than 0, try again`
            );
            break;
        case TWOFOLD_OLDER_NOW:
            console.log(
                `🆗 Father is twofold older now, Father age: ${fatherAge}, Son age: ${sonAge}`
            );
            break;
        default:
            const isFatherX2OlderThenSon = fatherMoreThenX2OlderThenSon(
                fatherAge,
                sonAge
            );
            if (isFatherX2OlderThenSon) {
                console.log(
                    `✅ Father will be twofold older than Son in ${result} years, when Father's age will be: ${
                        fatherAge + result
                    } and Son's age will be: ${sonAge + result}`
                );
            } else {
                console.log(
                    `✅ Father was twofold older than Son ${result} years ago, when Father's age was: ${
                        fatherAge - result
                    } and Son's age was: ${sonAge - result}`
                );
            }
    }
}

printResult(80, 35);
