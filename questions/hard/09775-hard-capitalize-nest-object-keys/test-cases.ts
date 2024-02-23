import type { Equal, Expect } from '@type-challenges/utils';

interface foo {
  foo: string
  bars: [{ foo: string }]
}

interface Foo {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type Cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
];
