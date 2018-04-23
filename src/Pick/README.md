# Pick

A helper to pick by object's props.

## Usage

```js
import type {Pick} from 'flown'

;({a: 1, b: 2}: Pick<{ a: 1, b: 2 }, ['a', 'b']>)
;({a: 1, b: undefined}: Pick<{ a: 1, b: 2 }, ['a']>)
;({a: undefined, b: undefined}: Pick<{ a: 1, b: 2 }, ['c']>)
