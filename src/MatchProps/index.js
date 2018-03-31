/* @flow */

export type MatchProps<T>=
  & (<V: T>(V) => $ElementType<V, $Keys<T>>)
  & <V>(V) => void
