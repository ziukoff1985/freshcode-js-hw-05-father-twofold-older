'use strict';

const INVALID_DATA = -1;
const TWOFOLD_OLDER_NOW = 0;

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
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
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
 * Main logic: validates input, checks if the father is twice as old as the son now,
 * otherwise calculates years before or after this happens.
 * @param {number} fatherAge - Age of the father.
 * @param {number} sonAge - Age of the son.
 * @returns {number} Returns:
 *  -1 - if data is invalid,
 *  0 - if father is twice as old now,
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
                `❌ Invalid data: (${fatherAge}, ${sonAge}), the age must be a number, the age difference between father and son must be more than 15 years, the age must be greater than 0, please try again!`
            );
            break;
        case TWOFOLD_OLDER_NOW:
            console.log(
                `🆗 The father is twice as old now, father's age: ${fatherAge}, son's age: ${sonAge}`
            );
            break;
        default:
            const isFatherMoreThanTwiceOlderThenSon =
                isFatherMoreThanTwiceOlder(fatherAge, sonAge);
            if (isFatherMoreThanTwiceOlderThenSon) {
                console.log(
                    `✅ The father will be twice as old as his son in ${result} years, when the father will be ${
                        fatherAge + result
                    } years old and the son will be ${
                        sonAge + result
                    } years old`
                );
            } else {
                console.log(
                    `✅ The father was twice as old as his son ${result} years ago, when the father was ${
                        fatherAge - result
                    } years old and the son was ${sonAge - result} years old`
                );
            }
    }
}

printResult(45, 30);
printResult(80, 35);
printResult(20, 50);
printResult(60, 30);
