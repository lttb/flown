# Identity

## Usage

```js
import type {Identity, _Identity} from 'flown'

;(true: Identity<true>)
;(false: Identity<false>)

;(true: $Call<_Identity, true>)
;(false: $Call<_Identity, false>)
```
