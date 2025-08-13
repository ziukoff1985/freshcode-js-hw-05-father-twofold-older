'use strict';

const INVALID_DATA = 0;
const TWOFOLD_OLDER_NOW = -1;

/**
 * Checks if the father is more than twice as old as the son.
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
 * @returns {boolean} - True if the father is more than twice as old as the son, otherwise false.
 */
const isFatherMoreThanTwiceOlder = (fatherAge, sonAge) =>
    fatherAge / sonAge > 2;

/**
 * Validates the provided ages.
 * @param {*} fatherAge - Age of the father.
 * @param {*} sonAge - Age of the son.
 * @returns {boolean} - True if the data is valid, otherwise false.
 */
function isAgeDataValid(fatherAge, sonAge) {
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

/**
 * Calculates the number of years before or after the moment when the father will be/was twice as old as his son.
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
 * @returns {number} - Number of years before or after the moment when the father will be/was twice as old as his son.
 */
function calculateYearsDifferenceToTwiceOlder(fatherAge, sonAge) {
    const isFatherMoreThanTwiceOlderThenSon = isFatherMoreThanTwiceOlder(
        fatherAge,
        sonAge
    );

    if (isFatherMoreThanTwiceOlderThenSon) {
        return fatherAge - 2 * sonAge;
    }

    return 2 * sonAge - fatherAge;
}

/**
 * Main logic: validates input, checks if the father is twice as old now,
 * otherwise calculates years before or after this happens.
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
 * @returns {number} Returns:
 *  0 - if data is invalid,
 *  -1 - if father is twice as old now,
 *  any number - years before/after will be/was twice as old as his son
 */
function getYearsUntilOrSinceTwiceOlder(fatherAge, sonAge) {
    const isDataValid = isAgeDataValid(fatherAge, sonAge);

    if (!isDataValid) return INVALID_DATA;

    if (fatherAge / sonAge === 2) return TWOFOLD_OLDER_NOW;

    return calculateYearsDifferenceToTwiceOlder(fatherAge, sonAge);
}

/**
 * Prints the result to the console.
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
 */
function printResult(fatherAge, sonAge) {
    const result = getYearsUntilOrSinceTwiceOlder(fatherAge, sonAge);

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
            const isFatherMoreThanTwiceOlderThenSon =
                isFatherMoreThanTwiceOlder(fatherAge, sonAge);
            if (isFatherMoreThanTwiceOlderThenSon) {
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

// Невалідні дані
printResult(-10, 5); // Негативний вік батька
printResult(40, -5); // Негативний вік сина
printResult(10, 5); // Різниця менше 15 років
printResult(0, 5); // Вік батька 0
printResult(50, 0); // Вік сина 0
printResult('50', 25); // Тип не number (string)

// Батько двічі старший прямо зараз
printResult(40, 20); // 2x зараз
printResult(90, 45); // 2x зараз

// Батько стане двічі старшим у майбутньому
printResult(50, 30); // стане через 10 років
printResult(45, 25); // стане через 5 років
printResult(70, 40); // стане через 10 років

// Батько був двічі старшим у минулому
printResult(80, 35); // був 10 років тому
printResult(60, 20); // був 20 років тому
printResult(100, 30); // був 40 років тому
