# Return

A helper to get the Return Type of the function.

## Usage

### Generic

```js
import type {Return} from 'flown'

declare function someFunction(string): string

/**
 * string
 */
type ReturnType = Return<typeof someFunction>
```

### Function

```js
import type {_Return} from 'flown'

declare function someFunction(string): string

/**
 * string
 */
type ReturnType = $Call<_Return, typeof someFunction>
```
