/* @flow */

declare function isCompat<A, B: A>(...args: [A, B]): true
declare function isCompat(): false

export type _IsCompat = typeof isCompat

export type IsCompat<A, B> = $Call<_IsCompat, A, B>
