## getAndRemoveAdjacentToValue(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: anyExceptObject,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset: integer,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany: integer_greater_than_zero<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Removes and returns `howMany` adjacent items from `array`, starting with, or  
close to, `value`.  Exactly where the selection starts is decided by `offset`,  
which is the position, relative to `value`, where to begin removing.  
For example, if `offset` is 0, then the selection begins at `value`.  If -1,  
it begins one place to the left of `value`.  If 1, it begins one place to the  
right.  

Note: the function only works with the first found instance of `value`.

### Examples
```
let array = [1,3,5,7,9,11,13,15,17];
let result = getAndRemoveAdjacentToValue(
    {value: 7, offset: 0, howMany: 3},
    array
);
// result is now [7, 9, 11] .
// array is now [1, 3, 5, 13, 15, 17].
// If offset was 2, for example, result would be [11, 13, 15]


let array = [1,3,5,7,9,11,13,15,17];
let result = getAndRemoveAdjacentToValue(
    {value: 13, offset: -2, howMany: 4},
    array
);
// result is now [9, 11, 13, 15] .
// array is now [1,3,5,7,17].
```

### Installation
`npm i  @writetome51/array-get-and-remove-adjacent-to-value`

### Loading
```
// if using TypeScript:
import {getAndRemoveAdjacentToValue} 
    from '@writetome51/array-get-and-remove-adjacent-to-value';
    
// if using ES5 JavaScript:
var getAndRemoveAdjacentToValue = 
    require('@writetome51/array-get-and-remove-adjacent-to-value').getAndRemoveAdjacentToValue;
```