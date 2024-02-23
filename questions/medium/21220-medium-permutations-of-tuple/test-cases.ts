import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
  PermutationsOfTuple<[any, unknown, never]>,
  [any, never, unknown] | [any, unknown, never] | [never, any, unknown] | [never, unknown, any] | [unknown, any, never] | [unknown, never, any]
  >>,
  Expect<Equal<
  PermutationsOfTuple<[1, number, unknown]>,
  [1, number, unknown] | [1, unknown, number] | [number, 1, unknown] | [number, unknown, 1] | [unknown, 1, number] | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
];
