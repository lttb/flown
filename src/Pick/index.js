/* @flow */

import type { ObjOf } from '../ObjOf'
import type { Prop } from '../Prop'

declare export function pick<O, P, A, B>(O, P): $Exact<$Call<
  & (([A, B]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B, V>(K, V) => V)
      & (() => (void))
    >>,
  })
, P>>

export type Pick<O, P> = $Call<typeof pick, O, P>
