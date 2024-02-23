/* eslint-disable @typescript-eslint/no-unused-vars */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Pop<T extends unknown[]> = T extends [...infer V, unknown] ? V : [];

type Cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
];
