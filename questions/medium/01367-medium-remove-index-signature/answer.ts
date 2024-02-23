import type { Equal, Expect } from '@type-challenges/utils';

interface Foo {
  [key: string]: unknown;
  foo: () => void;
}

interface Bar {
  [key: number]: unknown;
  bar: () => void;
  0: string;
}

const foobar = Symbol('foobar');
interface FooBar {
  [key: symbol]: unknown;
  [foobar]: () => void;
}

interface Baz {
  bar: () => void;
  baz: string;
}

type RemoveIndexSignature<T> = {
  [p in keyof T as string extends p
    ? never
    : number extends p
      ? never
      : symbol extends p
        ? never
        : p]: T[p]
};
type Check1 = RemoveIndexSignature<Foo>;
//    ^?
type Check1 = RemoveIndexSignature<Bar>;
//    ^?

type Cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo: () => void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar: () => void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar]: () => void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar: () => void; baz: string }>>,
];
