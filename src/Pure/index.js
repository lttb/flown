/* @flow */

import type { Arity, Return } from '..'
/**
 * TODO: think about an adoption of Arguments Type
 * (there are some issues with params mapping, like $TupleMap is loosing types of params)
 */
export type _Arguments =
  & (<A, B, C, D, E, R, F: (A, B, C, D, E) => R>(F) => $Call<
        & (<R: 5>(R) => [$ReadOnly<A>, $ReadOnly<B>, $ReadOnly<C>, $ReadOnly<D>, $ReadOnly<E>])
        & (<R: 4>(R) => [$ReadOnly<A>, $ReadOnly<B>, $ReadOnly<C>, $ReadOnly<D>])
        & (<R: 3>(R) => [$ReadOnly<A>, $ReadOnly<B>, $ReadOnly<C>])
        & (<R: 2>(R) => [$ReadOnly<A>, $ReadOnly<B>])
        & (<R: 1>(R) => [$ReadOnly<A>])
        & (<R: 0>(R) => [])
    , Arity<F>, F>)

type Args<F> = $Call<_Arguments & _Arguments, F>


export type Pure<F> = $Supertype<(...args: Args<F>) => Return<F>> & F
