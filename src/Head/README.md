# Head

Takes first element of a read-only array, array or tuple.
Supports up to six elements in tuples

## Usage

```js
import type {Head} from 'flown'

/**
 * 'a'
 */
type A = Head<['a', 'b']>

/**
 * number
 */
type A = Head<number[]>

/**
 * void
 */
type B = Prop<[]>

/**
 * Error
 */
type B = Prop<null>
