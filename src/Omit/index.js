/* @flow */

import type { Pick } from '../Pick'

declare export function omit<O, P>(O, P): $Diff<O, Pick<O, P>>

export type Omit<O, P> = $Call<typeof omit, O, P>
