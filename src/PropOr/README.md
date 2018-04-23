# PropOr

A helper to safety get object's prop.

## Usage

```js
import type {PropOr} from 'flown'

/**
 * 'test'
 */
type A = PropOr<{ a: 'test' }, 'a', null>

/**
 * null
 */
type B = PropOr<{ a: 'test' }, 'b', null>
