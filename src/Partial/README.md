# Partial

A helper for partial Function Type application.

## Usage

```js
import type {Partial, _IsCompat, _PathOr} from 'flown'

type _IsCompat2 = Partial<_IsCompat, 2>

;(true: $Call<_IsCompat2, 2>)
;(false: $Call<_IsCompat2, 3>)
```
