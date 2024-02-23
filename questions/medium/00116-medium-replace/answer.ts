/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${infer V}${From}${infer R}`
      ? `${V}${To}${R}`
      : S;

type Check1 = Replace<'foobar', 'bar', 'foo'>;
type Check2 = Replace<'foobarbar', 'bar', 'foo'>;

type Cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];
