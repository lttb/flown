/* @flow */

export type UnionFrom<T> = $Call<
  & (<A>([A]) => A)
  & (<A, B>([A, B]) => A | B)
  & (<A, B, C>(A, B, C) => A | B | C)
  & (<A, B, C, D>(A, B, C, D) => A | B | C | D)
  & (<A, B, C, D, E>(A, B, C, D, E) => A | B | C | D | E)
, T>
