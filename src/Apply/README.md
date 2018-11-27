# Apply

A helper to apply the Type Function to the tuple of arguments.

> Note, that Apply also has the third pseudo-argument, called $. It is used to specify the function call, because flow has some problems with polymorphic calls.

## Usage

```js
import type { Apply } from 'flown'

type UnionFromTuple<T> = $Call<Apply<
  $ComposeReverse,
  $TupleMap<T, <X, V>(V) => ((X) => (X | V))>
>, empty>

declare function union<A>(...args: A): UnionFromTuple<A>

declare var a: number
declare var b: string
declare var c: boolean

const x = union(a, b, c)

;(x: number | string | boolean)
```
