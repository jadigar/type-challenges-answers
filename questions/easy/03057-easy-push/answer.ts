/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Push<T extends readonly unknown[], U> = [...T, U];

type Cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
];
