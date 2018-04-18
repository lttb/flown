/* @flow */

export type PropOr<O, P, T> = $Call<(
    & (<X: Object, V: $Keys<X>>(X, V) => $ElementType<X, V>)
    & (() => T)
), O, P>


declare export function propOr<
  O, P, T,
>(O, P, T): PropOr<O, P, T>
