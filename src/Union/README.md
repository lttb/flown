# Union

A helper to get Union from Tuple.

## Usage

```js
import type { _Union } from 'flown'

declare var x: $Call<_Union, [string, number, boolean]>

;(x: string | number | boolean)
```
