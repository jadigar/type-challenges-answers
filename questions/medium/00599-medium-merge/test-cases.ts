import type { Equal, Expect } from '@type-challenges/utils';

interface Foo {
  a: number
  b: string
}
interface Bar {
  b: number
  c: boolean
}

type Cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
];
