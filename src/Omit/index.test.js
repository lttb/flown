/* @flow */

import type { Omit } from '..'

({
  a: undefined,
  b: undefined,
  c: 3,
  d: 4,
}: Omit<{a: 1, b: 2, c: 3, d: 4}, ['a', 'b']>)
