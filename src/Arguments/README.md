# Arguments

A helper to get function Arguments Type as a tuple.

## Usage

```js
import type {Arguments} from 'flown'

declare function someFunction(string, number, boolean): void

type Args = Arguments<typeof someFunction> // [string, number, boolean]
```
