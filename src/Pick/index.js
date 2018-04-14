/* @flow */

import type { ObjOf } from '../ObjOf'
import type { Prop } from '../Prop'

declare export function pick<O, P>(O, P): $Exact<$Call<
  & (<A>([A]) => {
    ...$Exact<ObjOf<A, Prop<O, A>>>,
  })
  & (<A, B>([A, B]) => {
    ...$Exact<ObjOf<A, Prop<O, A>>>,
    ...$Exact<ObjOf<B, Prop<O, B>>>,
  })
  & (<A, B, C>([A, B, C]) => {
    ...$Exact<ObjOf<A, Prop<O, A>>>,
    ...$Exact<ObjOf<B, Prop<O, B>>>,
    ...$Exact<ObjOf<C, Prop<O, C>>>,
  })
  & (<A, B, C, D>([A, B, C, D]) => {
    ...$Exact<ObjOf<A, Prop<O, A>>>,
    ...$Exact<ObjOf<B, Prop<O, B>>>,
    ...$Exact<ObjOf<C, Prop<O, C>>>,
    ...$Exact<ObjOf<D, Prop<O, D>>>,
  })
  & (<A, B, C, D, E>([A, B, C, D, E]) => {
    ...$Exact<ObjOf<A, Prop<O, A>>>,
    ...$Exact<ObjOf<B, Prop<O, B>>>,
    ...$Exact<ObjOf<C, Prop<O, C>>>,
    ...$Exact<ObjOf<D, Prop<O, D>>>,
    ...$Exact<ObjOf<E, Prop<O, E>>>,
  })
, P>>

export type Pick<O, P> = $Call<typeof pick, O, P>
