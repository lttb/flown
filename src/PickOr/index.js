/* @flow */

import type { ObjOf } from '../ObjOf'

declare export function pick<O, P>(O, P): $Exact<$Call<
  & (<A>([A]) => {
    ...$Exact<ObjOf<A, $ElementType<O, A>>>,
  })
  & (<A, B>([A, B]) => {
    ...$Exact<ObjOf<A, $ElementType<O, A>>>,
    ...$Exact<ObjOf<B, $ElementType<O, B>>>,
  })
  & (<A, B, C>([A, B, C]) => {
    ...$Exact<ObjOf<A, $ElementType<O, A>>>,
    ...$Exact<ObjOf<B, $ElementType<O, B>>>,
    ...$Exact<ObjOf<C, $ElementType<O, C>>>,
  })
  & (<A, B, C, D>([A, B, C, D]) => {
    ...$Exact<ObjOf<A, $ElementType<O, A>>>,
    ...$Exact<ObjOf<B, $ElementType<O, B>>>,
    ...$Exact<ObjOf<C, $ElementType<O, C>>>,
    ...$Exact<ObjOf<D, $ElementType<O, D>>>,
  })
  & (<A, B, C, D, E>([A, B, C, D, E]) => {
    ...$Exact<ObjOf<A, $ElementType<O, A>>>,
    ...$Exact<ObjOf<B, $ElementType<O, B>>>,
    ...$Exact<ObjOf<C, $ElementType<O, C>>>,
    ...$Exact<ObjOf<D, $ElementType<O, D>>>,
    ...$Exact<ObjOf<E, $ElementType<O, E>>>,
  })
, P>>

export type Pick<O, P> = $Call<typeof pick, O, P>
