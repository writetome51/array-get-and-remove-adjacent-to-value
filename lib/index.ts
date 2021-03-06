import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { errorIfIndexNotValidAfterOffsetWasAdded }
	from 'error-if-index-not-valid-after-offset-was-added';
import { errorIfNotInteger } from 'error-if-not-integer';
import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


// Removes and returns adjacent items from passed array, starting with, or
// close to, info.value.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAndRemoveAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will contain [7, 9, 11] .
// If offset was 2, for example, result would contain [11, 13, 15]


export function getAndRemoveAdjacentToValue(info: IAdjacentToValueInfo, array): any[] {

	let index = getFirstIndexOf(info.value, array); // validates info.value and array.
	errorIfIndexIsNegative(index); // means value wasn't found.

	errorIfNotInteger(info.offset);
	index += info.offset;
	errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);

	return getAndRemoveAdjacentAt(index, info.howMany, array);
}
