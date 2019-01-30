/* @flow */

export type _Head =
    & (([]) => void)
    & (<T>([T]) => T)
    & (<T, A>([T, A]) => T)
    & (<T, A, B>([T, A, B]) => T)
    & (<T, A, B, C>([T, A, B, C]) => T)
    & (<T, A, B, C, D>([T, A, B, C, D]) => T)
    & (<T, A, B, C, D, E>([T, A, B, C, D, E]) => T)
    & (<T, V: $ReadOnlyArray<T>>(arr: V) => T)

export type Head<T> = $Call<_Head, T>;
