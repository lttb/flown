/* @flow */

import type { Partial, _Partial } from './'
import type { _IsCompat } from '../IsCompat'

type _IsCompat2 = $Call<_Partial, _IsCompat, 2>

;(true: $Call<_IsCompat2, 2>)
;(false: $Call<_IsCompat2, 3>)

type _Truthy = $Call<_Partial, _IsCompat, 2, 2>
type _Falsy = $Call<_Partial, _IsCompat, 2, 3>

;(true: $Call<_Truthy>)
;(false: $Call<_Falsy>)


type _IsCompat3 = Partial<_IsCompat, 3>

;(true: $Call<_IsCompat3, 3>)
