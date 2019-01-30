/* @flow */

/** Another one implemenation

declare export function propOr<O, P, T>(O, P, T): $Call<(
    & (<V: Object, K: $Keys<V>>(K, V) => $ElementType<V, K>)
    & (() => T)
), P, O>
*/

declare export function propOr<O, P, T>(O, P, T): $Call<
  & (<V: Object>(V) => $ElementType<{[P]: T, ...$Exact<O>}, P>)
  & (() => T)
, O>

export type _PropOr = typeof propOr

export type PropOr<O, P, T> = $Call<typeof propOr, O, P, T>
