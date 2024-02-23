/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer U}`
  ? TrimLeft<U>
  : S;

type Cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
];
