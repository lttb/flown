/* @flow */

declare export function propOr<O, P, T>(O, P, T): $Call<(
    & (<V: $Keys<O>>(V) => $ElementType<O, V>)
    & (<V>(V) => T)
), P>

export type PropOr<O, P, T> = $Call<typeof propOr, O, P, T>;
