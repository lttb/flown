/* @flow */

import type { Return } from './'

{
  const fn = () => 'hey'

  ;('string': Return<typeof fn>)

  /**
   * $ExpectError
   *
   * Cannot cast `0` to `Return` because number [1] is incompatible with string [2].
   */
  ;(0: Return<typeof fn>)
}
