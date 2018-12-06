# Reduce

## Usage

```js
import type { Reduce } from 'flown'

type Merge<T> = Reduce<<X, V>(V) => ((X) => ({...$Exact<X>, ...$Exact<V>})), {}, T>

declare function merge<A>(A): Merge<A>

const x = merge([{a: 1}, {b: 1}, {c: 1}])

;(x: {a: 1, b: 1, c: 1})

;(x: {a: 1, b: 1, c: '1'}) // error
```
