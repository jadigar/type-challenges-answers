import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null], [Date, Function]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<Equal<UnionReplace<Date | Function | object, [[Date, string], [Function, undefined]]>, object | string | undefined>>,
];
