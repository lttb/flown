/* @flow */

declare function arity<F: (...args: [$NonMaybeType<mixed>]) => any>(fn: F): 0
declare function arity<F: (...args: [void, $NonMaybeType<mixed>]) => any>(fn: F): 1
declare function arity<F: (...args: [void, void, $NonMaybeType<mixed>]) => any>(fn: F): 2
declare function arity<F: (...args: [void, void, void, $NonMaybeType<mixed>]) => any>(fn: F): 3
declare function arity<F: (...args: [void, void, void, void, $NonMaybeType<mixed>]) => any>(fn: F): 4
declare function arity<F: (...args: [void, void, void, void, void, $NonMaybeType<mixed>]) => any>(fn: F): 5

declare function arity<F: (...args: [any, $NonMaybeType<mixed>]) => any>(fn: F): 1
declare function arity<F: (...args: [any, any, $NonMaybeType<mixed>]) => any>(fn: F): 2
declare function arity<F: (...args: [any, any, any, $NonMaybeType<mixed>]) => any>(fn: F): 3
declare function arity<F: (...args: [any, any, any, any, $NonMaybeType<mixed>]) => any>(fn: F): 4
declare function arity<F: (...args: [any, any, any, any, any, $NonMaybeType<mixed>]) => any>(fn: F): 5

export type _Arity = typeof arity

export type Arity<F> = $Call<_Arity, F>
