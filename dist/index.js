"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var error_if_index_not_valid_after_offset_was_added_1 = require("error-if-index-not-valid-after-offset-was-added");
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
// Removes and returns adjacent items from passed array, starting with, or
// close to, info.value.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAndRemoveAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will contain [7, 9, 11] .
// If offset was 2, for example, result would contain [11, 13, 15]
function getAndRemoveAdjacentToValue(info, array) {
    var index = array_get_indexes_1.getFirstIndexOf(info.value, array); // validates info.value and array.
    error_if_index_is_negative_1.errorIfIndexIsNegative(index); // means value wasn't found.
    errorIfNotInteger_1.errorIfNotInteger(info.offset);
    index += info.offset;
    error_if_index_not_valid_after_offset_was_added_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(index, info.howMany, array);
}
exports.getAndRemoveAdjacentToValue = getAndRemoveAdjacentToValue;
