// Add your functions here
// COULDN'T RESOLVE IT BY MYSELF.

// my own map-like methods
// map returns an array with all values made negative
// 1) transforms correctly
// map returns an array with the original values
// 2) transforms correctly
// map returns an array with the original values multiplied by 2
// 3) transforms correctly
// map returns an array with the original values squared
// 4) transforms correctly
function map(array, callbackFnc) {
    let r = [];
    for (let i = 0; i < array.length; i++) {
        r.push(callbackFnc(array[i]));
    };
    return r;
};

// my own reduce-like methods
// reduce returns a running total when not given a starting point
// 1) reduces correctly
// reduce returns a running total when given a starting point
// 2) reduces correctly
// reduce returns true when all values are true
// 3) reduces correctly
// reduce returns false when any value is false
// 4) reduces correctly
// reduce returns true when a true value is present
// 5) reduces correctly
// reduce returns false when no true value is present
// 6) reduces correctly
function reduce(array, callbackFnc, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < array.length; i++) {
            total = callbackFnc(array[i], total);
        };
        return total;
    } else {
        total = array[0];
        for (let i = 1; i < array.length; i++) {
            total = callbackFnc(array[i], total);
        };
        return total;
    };
};
