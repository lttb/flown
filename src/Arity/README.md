# Apply

A helper to the arity of the Function.

## Usage

```js
import type { Arity } from 'flown'

const sum = (a: number, b: number): number => a + b

declare var arity: Arity<typeof sum>

;(arity: 2) // ok
;(arity: 3) // error
```
