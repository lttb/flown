/* @flow */


export type Path<O: Object, P> = $Call<
  & (<A, B, C>([A, B, C]) => $ElementType<
    $ElementType<$ElementType<O, A>, B>
  , C>)
  & (<A, B>([A, B]) => $ElementType<
    $ElementType<O, A>
  , B>)
  & (<A>([A]) => $ElementType<
    O
  , A>)
, P>

export type _Path = <O: Object, P>(O, P) => $Call<
  & (<A, B, C>([A, B, C]) => $ElementType<
    $ElementType<$ElementType<O, A>, B>
  , C>)
  & (<A, B>([A, B]) => $ElementType<
    $ElementType<O, A>
  , B>)
  & (<A>([A]) => $ElementType<
    O
  , A>)
, P>

/*
export type Path<O: Object, P> = $Call<(
  & (<A: $Keys<O>, B, C, D, E, V: [A, B, C, D, E]>
    (V) => $ElementType<Path<O, [A, B, C, D]>, E>)
  & (<A: $Keys<O>, B, C, D, V: [A, B, C, D]>
    (V) => $ElementType<Path<O, [A, B, C]>, D>)
  & (<A: $Keys<O>, B, C, V: [A, B, C]>
    (V) => $ElementType<Path<O, [A, B]>, C>)
  & (<A: $Keys<O>, B, V: [A, B]>
    (V) => $ElementType<Path<O, [A]>, B>)
  & (<A: $Keys<O>, V: [A]>
    (V) => $ElementType<O, A>)
), P>

declare function path<
  O, P, A, B, C, D, E
>(O, [A, B, C, D, E]): $ElementType<Path<O, [A, B, C, D]>, E>

declare function path<
  O, P, A, B, C, D
>(O, [A, B, C, D]): $ElementType<Path<O, [A, B, C]>, D>

declare function path<
  O, P, A, B, C
>(O, [A, B, C]): $ElementType<Path<O, [A, B]>, C>
declare function path<
  O, P, A, B
>(O, [A, B]): $ElementType<Path<O, [A]>, B>
declare function path<
  O, P, A
>(O, [A]): $ElementType<O, A>
declare function path<O, P, T>(O, P): T

export function path() {}

export type _Path = typeof path
*/
