/* @flow */

export type PathOr<O, P, T> = $Call<(
  & (<B, C, D, E, A: $Keys<O>, V: [A, B, C, D, E]>
    (V) => $ElementType<{[E]: T, ...$Exact<PathOr<O, [A, B, C, D], {}>>}, E>)
  & (<B, C, D, A: $Keys<O>, V: [A, B, C, D]>
    (V) => $ElementType<{[D]: T, ...$Exact<PathOr<O, [A, B, C], {}>>}, D>)
  & (<B, C, A: $Keys<O>, V: [A, B, C]>
    (V) => $ElementType<{[C]: T, ...$Exact<PathOr<O, [A, B], {}>>}, C>)
  & (<B, A: $Keys<O>, V: [A, B]>
    (V) => PathOr<$ElementType<O, A>, [B], T>)
  & (<A: $Keys<O>, V: [A]>
    (V) => $ElementType<O, A>)
  & (<V>
    (V) => T)
), P>

declare export function pathOr<
  O, P, T,
  A, B
>(O, P, T): $Call<
  & (([A, B]) => PathOr<O, [A, B], T>)
  & (([A]) => PathOr<O, [A], T>)
, P>
