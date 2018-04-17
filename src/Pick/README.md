# Pick

A helper to get object's prop.

## Usage

```js
import type {Pick} from 'flown'

/**
 * 'test'
 */
type A = Pick<{ a: 'test' }, ['a', 'b']>

/**
 * Error
 */
type B = Prop<{ a: 'test' }, 'b'>
