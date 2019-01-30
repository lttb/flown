/* @flow */

import type { Fix, Flip } from '..'

type F = <A, B>(A, B) => [A, B]

;(([0, '0']): Fix<$Call<F, number, string>>)
;((['0', 0]): Fix<$Call<Flip<F>, number, string>>)

/**
 * $ExpectError
 */
;((['0', '0']): Fix<$Call<Flip<F>, number, string>>)

;(([0, false]): Fix<$Call<F, number, boolean>>)
;(([false, 0]): Fix<$Call<Flip<F>, number, boolean>>)

/**
 * $ExpectError
 */
;(([false, false]): Fix<$Call<Flip<F>, number, boolean>>)
