import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, '456' | 123 | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
];
