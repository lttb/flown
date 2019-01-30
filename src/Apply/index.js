/* @flow */

declare function apply<Fn, Fs, F1, F2, F3, F4, F5>(Fn, Fs): $Call<(
    & (([F1, F2, F3, F4, F5]) => $Call<Fn, F1, F2, F3, F4, F5>)
    & (([F1, F2, F3, F4]) => $Call<Fn, F1, F2, F3, F4>)
    & (([F1, F2, F3]) => $Call<Fn, F1, F2, F3>)
    & (([F1, F2]) => $Call<Fn, F1, F2>)
    & (([F1]) => $Call<Fn, F1>)
), Fs>

export type _Apply = typeof apply

export type Apply<Fn, Fs, $ = empty> = $Call<_Apply, Fn, Fs, $>
