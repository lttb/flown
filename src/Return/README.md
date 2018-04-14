# Return

A helper to get the Return Type of the function.

## Usage

```js
import type {Return} from 'flown'

declare function someFunction(string): string

/**
 * string
 */
type ReturnType = Return<typeof someFunction>
```
