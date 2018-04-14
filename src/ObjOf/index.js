/* @flow */

function assign(k) {
  const x = {}
  x[k] = null
  return x
}

declare export function objOf<K, V>(K, V): $ObjMap<$Call<typeof assign, K>, () => V>

/**
 * There is an issue with double-errors using $Call<typeof obj, K, V>
 */
export type ObjOf<K, V> = $ObjMap<$Call<typeof assign, K>, () => V>
