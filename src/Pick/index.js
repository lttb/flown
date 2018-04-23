/* @flow */

declare export function pick<
  O, P, A, B, C, D, E
>(O, P): $Exact<$Call<
  & (([A]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A, V>(K, V) => V)
      & (() => (void))
    >>,
  })
  & (([A, B]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B, V>(K, V) => V)
      & (() => (void))
    >>,
  })
  & (([A, B, C]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C, V>(K, V) => V)
      & (() => void)
    >>,
  })
  & (([A, B, C, D]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C | D, V>(K, V) => V)
      & (() => void)
    >>,
  })
  & (([A, B, C, D, E]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C | D | E, V>(K, V) => V)
      & (() => void)
    >>,
  })
, P>>

export type _Pick = typeof pick

export type Pick<O, P> = $Call<_Pick, O, P>
