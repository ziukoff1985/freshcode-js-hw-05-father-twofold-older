'use strict';

function validateAge(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0) {
        return false;
    }
    return true;
}

function calcFatherXOlder(fatherAge, sonAge) {
    const fatherXOlder = fatherAge / sonAge;
    return fatherXOlder;
}

function resultInFuture(fatherAge, sonAge) {
    for (let i = 0; i <= fatherAge; i++) {
        const result = (fatherAge + i) / (sonAge + i);
        if (result === 2) {
            return i;
        }
    }
    return null;
}

function resultInPast(fatherAge, sonAge) {
    for (let i = 0; i <= fatherAge; i++) {
        if (sonAge < 0) break;
        const result = (fatherAge - i) / (sonAge - i);
        if (result === 2) {
            return i;
        }
    }
    return null;
}

function calculateAgeDiff(fatherAge, sonAge) {
    const isDataValid = validateAge(fatherAge, sonAge);

    if (!isDataValid) {
        return;
    }

    const fatherXOlder = calcFatherXOlder(fatherAge, sonAge);
    if (fatherXOlder < 2) {
        const result = resultInPast(fatherAge, sonAge);
        console.log(result);
        return;
    } else if (fatherXOlder > 2) {
        const result = resultInFuture(fatherAge, sonAge);
        console.log(result);
        return;
    } else {
        console.log('Father is twofold older now');
        return;
    }
}

calculateAgeDiff(40, 24);
