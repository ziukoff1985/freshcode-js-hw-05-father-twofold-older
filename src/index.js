'use strict';

/**
 * Calculates number of years when father will be or was twice older than son
 * @param {number} fatherAge
 * @param {number} sonAge
 * @returns {void}
 */
function twiceOlder(fatherAge, sonAge) {
    if (
        typeof fatherAge !== 'number' ||
        typeof sonAge !== 'number' ||
        fatherAge < 0 ||
        sonAge < 0 ||
        fatherAge - sonAge < 15
    )
        return console.log(
            `❌ Invalid data - age must be a number, age diff ≥ 15, ages must be ≥ 0, try again: (${fatherAge}, ${sonAge})`
        );

    if (fatherAge / sonAge === 2)
        return console.log(
            `🆗 Father is twice older now: father ${fatherAge}, son ${sonAge}`
        );

    const numberOfYears = Math.abs(fatherAge - 2 * sonAge);

    if (fatherAge > 2 * sonAge) {
        console.log(
            `✅ Father will be twice older in ${numberOfYears} years: father ${
                fatherAge + numberOfYears
            }, son ${sonAge + numberOfYears}`
        );
    } else {
        console.log(
            `✅ Father was twice older ${numberOfYears} years ago: father ${
                fatherAge - numberOfYears
            }, son ${sonAge - numberOfYears}`
        );
    }
}

twiceOlder(50, 30);
twiceOlder(70, 30);
twiceOlder(0, 30);
twiceOlder(60, 30);
twiceOlder(60, 10.5);
twiceOlder(60, 0.1);
