# IsCompat

A helper to check the type compatibility.

## Usage

```js
import type {IsCompat} from 'flown'

;(true: IsCompat<2, 2>)
;(false: IsCompat<2, 3>)

;(true: IsCompat<{a: number}, {a: number}>)
;(true: IsCompat<{a: number}, {|a: number|}>)
;(true: IsCompat<{a: number}, {a: number, b?: number}>)
```
