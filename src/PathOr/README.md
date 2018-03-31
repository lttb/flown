# PathOr

A helper to safety get the Type of the value in an object by path.

## Usage

```js
import type {PathOr} from 'flown'

let value

(value: PathOr<{hey: {hoh: 'hoh'}}, ['hey'], null>) // {hoh: 'hoh'}
(value: PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh'], null>) // 'hoh'
(value: PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah'], null>) // null
```

An example with ramda's `pathOr`:
```js
import type {PathOr} from 'flown'

declare function pathOr<D, P: string[], O: {}>(D, P, O): PathOr<O, P, D>

const x: string = pathOr(null, ['hey', 'hoh'], {hey: {hoh: 'hoh'}})
```
