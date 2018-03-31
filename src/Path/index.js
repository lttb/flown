/* @flow */

export type Path<O, P> = $Call<(
  & (<B, C, D, E, A: $Keys<O>, V: [A, B, C, D, E]>
    (V) => $ElementType<Path<O, [A, B, C, D]>, E>)
  & (<B, C, D, A: $Keys<O>, V: [A, B, C, D]>
    (V) => $ElementType<Path<O, [A, B, C]>, D>)
  & (<B, C, A: $Keys<O>, V: [A, B, C]>
    (V) => $ElementType<Path<O, [A, B]>, C>)
  & (<B, A: $Keys<O>, V: [A, B]>
    (V) => Path<$ElementType<O, A>, [B]>)
  & (<A: $Keys<O>, V: [A]>
    (V) => $ElementType<O, A>)
), P>;
