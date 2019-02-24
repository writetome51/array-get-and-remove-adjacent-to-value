"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
// Removes and returns adjacent items from passed array, starting with, or
// close to, info.value.
// Check interface IAdjacentToValueInfo for more info on how to use this.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAndRemoveAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will contain [7, 9, 11] .
// If offset was 2, for example, result would contain [11, 13, 15]
function getAndRemoveAdjacentToValue(info, array) {
    var index = array_get_indexes_1.getFirstIndexOf(info.value, array);
    errorIfNotInteger_1.errorIfNotInteger(info.offset);
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
        return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(index, info.howMany, array);
    });
}
exports.getAndRemoveAdjacentToValue = getAndRemoveAdjacentToValue;
