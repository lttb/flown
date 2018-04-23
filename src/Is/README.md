# Is

A helper to check the type equality.

## Usage

```js
import type {Is} from 'flown'

;(true: Is<2, 2>)
;(false: Is<2, 3>)

;(true: Is<{a: number}, {a: number}>)

;(false: Is<{+a: number}, {a: number}>)
;(false: Is<{a: number}, {|a: number|}>)
;(false: Is<{a: number}, {a: number, b?: number}>)
```
