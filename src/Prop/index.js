/* @flow */

declare export function prop<O, P>(O, P): $ElementType<O, P>

export type Prop<O, P> = $Call<typeof prop, O, P>;
