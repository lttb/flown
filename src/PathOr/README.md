# PathOr

A helper to safety get the Type of the value in an object by path.

## Usage

```js
import type {PathOr} from 'flown'

;({hoh: 'hoh'}: PathOr<{hey: {hoh: 'hoh'}}, ['hey'], null>)
;('hoh': PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh'], null>)
;(null: PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah'], null>)
```
