/* @flow */

import { pathOr, type PathOr } from './'

({ hoh: 'hoh' }: PathOr<{hey: {hoh: 'hoh'}}, ['hey'], null>) // {hoh: 'hoh'}
;('hoh': PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh'], null>) // 'hoh'
;(null: PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah'], null>) // null

// declare function pathOr<D, P, O>(D, P, O): PathOr<O, P, D>

;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh')
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh2'], null): null)
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey'], null): {hoh: 'hoh'})

const x = pathOr({ hey: { hoh: 'hoh' } }, ['hey'], null)

console.log(x.hoh2)
