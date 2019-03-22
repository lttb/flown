# Omit

A helper to omit by object's props.

## Usage

```js
import type {Omit} from 'flown'

type Original = {a: 1, b: 2, c: 3, d: 4};
type Omitted = Omit<Original, ['a', 'b']>; 

// type of Omitted: {c: 3, d: 4, a: void, b: void}

({
  a: undefined,
  b: undefined,
  c: 3,
  d: 4,
}: Omitted);
```
