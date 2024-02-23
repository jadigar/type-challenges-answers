/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${infer W}${Space}` | `${Space}${infer W}`
  ? Trim<W>
  : S;

  type Cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'     str'>, 'str'>>,
    Expect<Equal<Trim<'str   '>, 'str'>>,
    Expect<Equal<Trim<'     str     '>, 'str'>>,
    Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
    Expect<Equal<Trim<''>, ''>>,
    Expect<Equal<Trim<' \n\t '>, ''>>,
  ];
