"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentToValue_1 = require("./getAndRemoveAdjacentToValue");
var arrayToModify = [1, 3, 5, 7, 9, 11, 13, 15, 17];
var result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue({
    value: 7,
    offset: 0,
    howMany: 3
}, arrayToModify);
if (result.length === 3 && result[0] === 7 && result[2] === 11) {
    console.log('test 1 passed');
}
else
    console.log('test 1 failed');
if (arrayToModify.length === 6 && arrayToModify[3] === 13 && arrayToModify[5] === 17) {
    console.log('test 2 passed');
}
else
    console.log('test 2 failed');
arrayToModify = [1, 3, 5, 7, 9, 11, 13, 15, 17];
result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue({ value: 13, offset: -2, howMany: 4 }, arrayToModify);
if (result.length === 4 && result[0] === 9 && result[3] === 15)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
if (arrayToModify.length === 5 && arrayToModify[0] === 1 && arrayToModify[4] === 17)
    console.log('test 4 passed');
var errorTriggered = false;
try {
    result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue({ value: 1, offset: 0, howMany: 0 }, // howMany cannot be zero
    arrayToModify);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
errorTriggered = false;
try {
    result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue(
    // 1 is first item in array, so offset -1 is impossible:
    { value: 1, offset: -1, howMany: 2 }, arrayToModify);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
errorTriggered = false;
try {
    result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue({ value: 1, offset: 0, howMany: 6 }, arrayToModify);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
errorTriggered = false;
try {
    result = getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue({ value: 19, offset: 0, howMany: 1 }, arrayToModify);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
