# Reduce

## Usage

```js
import type { Reduce } from 'flown'

type MergeAll<T> = Reduce<<X, V>(V) => ((X) => ({...$Exact<X>, ...$Exact<V>})), {}, T>

declare function mergeAll<A>(A): MergeAll<A>

const x = mergeAll([{a: 1}, {b: 1}, {c: 1}])

;(x: {a: 1, b: 1, c: 1})

;(x: {a: 1, b: 1, c: '1'}) // error
```
