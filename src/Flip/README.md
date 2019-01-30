# Flip

A helper to flip Function Type Arguments.

## Usage

```js
import type { Flip } from 'flown'

type F = <A, B>(A, B) => [A, B]

;(([0, '0']): $Call<F, number, string>)

;((['0', 0]): $Call<Flip<F>, number, string>)
```
