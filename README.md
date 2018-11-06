To include in your project:

import {getAndRemoveAdjacentToValue} from '@writetome51/array-get-and-remove-adjacent-to-value';

getAndRemoveAdjacentToValue(info, arrayToModify);

info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}

Removes and returns adjacent items from passed arrayToModify, starting with, or
close to, info.value.

Example of usage:

let arrayToModify = [1,3,5,7,9,11,13,15,17];

let result = getAndRemoveAdjacentToValue({value: 7, offset: 0, howMany: 3},  arrayToModify);

result will contain [7, 9, 11] .

If offset was 2, for example, result would contain [11, 13, 15]

arrayToModify will be left as [1,3,5,13,15,17].


More examples:

let arrayToModify = [1,3,5,7,9,11,13,15,17];

let result = getAndRemoveAdjacentToValue({value: 13, offset: -2, howMany: 4},  arrayToModify);

result will contain [9, 11, 13, 15] .

arrayToModify will be left as [1,3,5,7,17].