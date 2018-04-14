/* @flow */

declare function is<A, B: A>(...args: [A, B]): true
declare function is(...args: []): false

export type Is = typeof is
