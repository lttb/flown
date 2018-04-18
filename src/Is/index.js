/* @flow */

declare function is<A, B: A>(...args: [A, B]): true
declare function is(): false

export type Is = typeof is
