# Pure

Cast default function to function with ReadOnly arguments.
It's useful if you want to call a function, that expects the usual object as an argument, with ReadOnly type.

## Usage

```js
import type {Pure} from 'flown'

const getX = (data: {x: number}): * => data.x

declare var data: $ReadOnly<{x: 1}>

/**
 * With Type Casting expression
 */
;(getX: Pure<*>)(data) // ok
;(getX: Pure<*>)({x: 1}) // ok
;(getX: Pure<*>)({x: 'x'}) // error
```
