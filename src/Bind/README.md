# Bind

A helper to bind Function Type Arguments.

## Usage

```js
import type {Arguments} from 'flown'

declare function someFunction(string, number, boolean): void

type Args = Arguments<typeof someFunction> // [string, number, boolean]
```
