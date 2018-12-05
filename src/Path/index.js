/* @flow */

export type _Path =
    & (<O, A, B, C, D, E>(O, [A, B, C, D, E]) =>
        $ElementType<$ElementType<$ElementType<$ElementType<$ElementType<O, A>, B>, C>, D>, E>)
    & (<O, A, B, C, D>(O, [A, B, C, D]) => $ElementType<$ElementType<$ElementType<$ElementType<O, A>, B>, C>, D>)
    & (<O, A, B, C>(O, [A, B, C]) => $ElementType<$ElementType<$ElementType<O, A>, B>, C>)
    & (<O, A, B>(O, [A, B]) => $ElementType<$ElementType<O, A>, B>)
    & (<O, A>(O, [A]) => $ElementType<O, A>)

export type Path<O: Object, P> = $Call<_Path, O, P>
