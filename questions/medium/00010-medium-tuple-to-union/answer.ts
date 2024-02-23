/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type TupleToUnion<T extends unknown[]> = T[number];
type TupleToUnion2<T extends unknown[]> = T extends (infer S)[] ? S : never;

type Cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, '456' | 123 | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
  Expect<Equal<TupleToUnion2<[123, '456', true]>, '456' | 123 | true>>,
  Expect<Equal<TupleToUnion2<[123]>, 123>>,
];
