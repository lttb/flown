/* @flow */

import type { _Return } from '../Return'

declare function arguments<
  _A,
  V: <A>(...args: [A & _A]) => any
>(V): [
  $ReadOnly<_A>
]

declare function arguments<
  _A, _B,
  V: <B: _B>(...args: [_A, B]) => any
>(V): ([
  $ReadOnly<_A>,
  $ReadOnly<_B>
])

declare function arguments<
  _A, _B, _C,
  V: <C: _C>(...args: [_A, _B, C]) => any
>(V): ([
  $ReadOnly<_A>,
  $ReadOnly<_B>,
  $ReadOnly<_C>,
])

declare function arguments<
  _A, _B, _C, _D,
  V: <D: _D>(...args: [_A, _B, _C, D]) => any
>(V): ([
  $ReadOnly<_A>,
  $ReadOnly<_B>,
  $ReadOnly<_C>,
  $ReadOnly<_D>,
])

export type Pure<T> = (((...args: $Call<typeof arguments, T>) => $Call<_Return, T>) & T)
