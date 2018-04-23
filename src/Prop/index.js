/* @flow */

declare export function prop<O, P>(O, P): $ElementType<O, P>

export type _Prop = typeof prop

export type Prop<O, P> = $Call<_Prop, O, P>;
