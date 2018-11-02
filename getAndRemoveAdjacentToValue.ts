import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic';
import { getAndRemoveAdjacentAt }
	from '@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { errorIfIndexNotValidAfterOffsetWasAdded }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded';


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


export function getAndRemoveAdjacentToValue(info: IAdjacentToValueInfo, array): any[] {
	let index = getFirstIndexOf(info.value, array);
	errorIfNotInteger(info.offset);
	return ifIndexNotNegative_getActionResult(index, () => {
		index += info.offset;

		errorIfIndexNotValidAfterOffsetWasAdded(index, array);
		return getAndRemoveAdjacentAt(index, info.howMany, array);
	});
}
