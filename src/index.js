'use strict';

function validateAge(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
        return false;
    }
    return true;
}

const calculateFatherXOlder = (fatherAge, sonAge) => fatherAge / sonAge;

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
        return;
    }

    if (fatherAge / sonAge === 2) {
        console.log('Father is twofold older now');
        return;
    }

    const result = calcResultByX(fatherAge, sonAge);
    console.log(result);
    return result;
}

calculateAgeDiff(80, 17);
