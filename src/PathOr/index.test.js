/* @flow */

import { pathOr, type PathOr } from './'

// ('hoh': PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh'], null>) // 'hoh'
// ;(null: PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah'], null>) // null
// ;({ hoh: 'hoh' }: PathOr<{hey: {hoh: 'hoh'}}, ['hey'], null>) // {hoh: 'hoh'}
// ;('hoh': PathOr<{hey: {hoh: 'hoh'}}, ['hey', 'hoh'], null>) // 'hoh'

// declare function pathOr<D, P, O>(D, P, O): PathOr<O, P, D>

(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh')
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh2'], null): null)
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey'], null): {hoh: 'hoh'})

// ;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh')

// const x: 'hoh' = pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null)
//
// console.log(x.hoh2)
