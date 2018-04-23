/* @flow */

import type { Bind, _Bind } from './'
import type { _IsCompat } from '../IsCompat'

type _IsCompat2 = $Call<_Bind, _IsCompat, 2>

;(true: $Call<_IsCompat2, 2>)
;(false: $Call<_IsCompat2, 3>)

type _Truthy = $Call<_Bind, _IsCompat, 2, 2>
type _Falsy = $Call<_Bind, _IsCompat, 2, 3>

;(true: $Call<_Truthy>)
;(false: $Call<_Falsy>)


type _IsCompat3 = Bind<_IsCompat, 3>

;(true: $Call<_IsCompat3, 3>)
