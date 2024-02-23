import type { Equal, Expect } from '@type-challenges/utils';

interface Foo {
  name: string
  age: string
}
interface Bar {
  name: string
  age: string
  gender: number
}
interface Coo {
  name: string
  gender: number
}

type Cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
];
