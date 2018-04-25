/* @flow */

declare export function omit<
  O, P, A, B, C, D, E
>(O, P): $Exact<$Call<
  & (([A]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A, V>(K, V) => void)
      & (<K, V>(K, V) => V)
    >>,
  })
  & (([A, B]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B, V>(K, V) => void)
      & (<K, V>(K, V) => V)
    >>,
  })
  & (([A, B, C]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C, V>(K, V) => void)
      & (<K, V>(K, V) => V)
    >>,
  })
  & (([A, B, C, D]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C | D, V>(K, V) => void)
      & (<K, V>(K, V) => V)
    >>,
  })
  & (([A, B, C, D, E]) => {
    ...$Exact<$ObjMapi<O,
      & (<K: A | B | C | D | E, V>(K, V) => void)
      & (<K, V>(K, V) => V)
    >>,
  })
, P>>

export type _Omit = typeof omit

export type Omit<O, P> = $Call<_Omit, O, P>
