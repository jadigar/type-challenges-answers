import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1, 2] | [1] | [2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1, 2, 3] | [1, 2] | [1, 3] | [1] | [2, 3] | [2] | [3] >>,
];
