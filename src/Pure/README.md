# Pure

Cast default function to function with ReadOnly arguments.

## Usage

```js
import type {Pure} from 'flown'

const getX = (data: {x: number}): * => data.x

declare var data: $ReadOnly<{x: 1}>

/**
 * Type Casting expression
 */
const x = (getX: Pure<*>)(data)
