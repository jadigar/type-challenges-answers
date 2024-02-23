/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];

const tuple = [1] as const;

type Cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
];

// @ts-expect-error
type Error = Concat<null, undefined>;
