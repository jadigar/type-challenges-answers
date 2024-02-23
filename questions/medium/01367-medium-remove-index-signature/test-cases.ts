import type { Equal, Expect } from '@type-challenges/utils';

interface Foo {
  [key: string]: any
  foo: () => void
}

interface Bar {
  [key: number]: any
  bar: () => void
  0: string
}

const foobar = Symbol('foobar');
interface FooBar {
  [key: symbol]: any
  [foobar]: () => void
}

interface Baz {
  bar: () => void
  baz: string
}

type Cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo: () => void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar: () => void, 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar]: () => void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar: () => void, baz: string }>>,
];
