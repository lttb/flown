# Bind

A helper to bind Function Type Arguments.

## Usage

```js
import type {Bind, _IsCompat, _PathOr} from 'flown'

type _IsCompat2 = Bind<_IsCompat, 2>

;(true: $Call<_IsCompat2, 2>)
;(false: $Call<_IsCompat2, 3>)
```
