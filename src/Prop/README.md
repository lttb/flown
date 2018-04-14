# Prop

A helper to get object's prop.

## Usage

```js
import type {Prop} from 'flown'

/**
 * 'test'
 */
type A = Prop<{ a: 'test' }, 'a'>

/**
 * Error
 */
type B = Prop<{ a: 'test' }, 'b'>
